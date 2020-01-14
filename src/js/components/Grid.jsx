import React, { useState } from 'react'
import Tile from './Tile.jsx'
import PropTypes from 'prop-types'


function newGrid(width, height) {
  const grid = Array.from({ length: height },
    () => Array.from({ length: width },
      () => {
        return { type: 'empty', visited: false }
      }))

  grid[0][19].type = 'end'
  grid[19][0].type = 'start'

  return grid
}

function Grid({ width, height }) {
  const [grid, updateGrid] = useState(newGrid(width, height))

  function toggleWall(x, y) {
    switch (grid[x][y].type) {
      case 'wall': grid[x][y].type = 'empty'; break;
      case 'empty': grid[x][y].type = 'wall'; break;
      default: break;
    }

    updateGrid(grid.slice(0)) //force rerender
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