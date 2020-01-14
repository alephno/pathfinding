import React, { useState } from 'react'
import Tile from './Tile.jsx'
import PropTypes from 'prop-types'

function Grid({ width, height}) {
  const emptyGrid = new Array(height).fill(new Array(width).fill({type: 'empty', visited: false}))
  const [grid, updateGrid] = useState(emptyGrid)

  return (
    <div className="path-grid">
      {grid.flatMap(
        (row, r) => row.map(
          (tile, c) => <Tile type={tile.type} visited={tile.visited} key={r * width + c}/>)
        )}
    </div>
  )
}

Grid.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number
}

export default Grid