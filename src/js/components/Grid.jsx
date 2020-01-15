import React, { useState, useEffect } from 'react'
import Tile from './Tile.jsx'
import PropTypes from 'prop-types'
import {dijkstra, buildPath} from '../algorithms/dijkstra.js'

// coordinates for starting and ending nodes
const start = [19, 0]
const end = [0, 19]

/**
 * Creates an empty grid and places the starting and ending nodes.
 *
 * @param {number} width Number of columns
 * @param {number} height Number of rows
 */
function newGrid(width, height) {
  const grid = Array.from({ length: height },
    () => Array.from({ length: width },
      () => {
        return { type: 'empty', visited: false }
      }))

  grid[start[0]][start[1]].type = 'end'
  grid[end[0]][end[1]].type = 'start'

  return grid
}

function Grid({ width, height, animate }) {
  const [grid, updateGrid] = useState(newGrid(width, height))

  function toggleWall(x, y) {
    switch (grid[x][y].type) {
      case 'wall': grid[x][y].type = 'empty'; break;
      case 'empty': grid[x][y].type = 'wall'; break;
      default: break;
    }

    updateGrid(grid.slice(0)) //force rerender
  }

  useEffect(() => {
    if (animate) {
      animateSolution()
    } else {
      // reset visited nodes and solution, but leave walls
      grid.forEach(row => row.forEach(tile => {
        tile.visited = false
        if (tile.type === 'path') tile.type = 'empty'
      }))
      updateGrid(grid.slice(0)) //force rerender
    }
  }, [animate])

  function animateSolution() {
    function iter(stepFn) {
      let result = stepFn()
      if (Array.isArray(result)) {
        const path = buildPath(result, width, end)
        path.forEach(([r, c]) => {
          const tile = grid[r][c]
          if (tile.type !== 'start' && tile.type !== 'end') tile.type = 'path'
        })
        updateGrid(grid.slice(0)) // force rerender
      } else if (!result) {
        window.alert('Unsolvable')
      } else {
        setTimeout(() => iter(result), 50)
        updateGrid(grid.slice(0)) // force rerender
      }
    }

    iter(dijkstra(grid, start, end))
  }

  return (
    <div className="path-grid">
      {grid.flatMap(
        (row, r) => row.map(
          (tile, c) => <Tile type={tile.type} visited={tile.visited} key={r * width + c} onClick={() => toggleWall(r, c)} />)
      )}
    </div>
  )
}

Grid.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number
}

export default Grid