import React, { useState } from 'react'
import PropTypes from 'prop-types'

const tileClasses = {
  'empty': 'tile-empty',
  'wall': 'tile-wall',
  'path': 'tile-path',
  'start': 'tile-start',
  'end': 'tile-end'
}

function Tile({ type, visited, onClick }) {
  return (
    <span className={`tile ${tileClasses[type]} ${visited ? 'tile-visited' : 'tile-unvisited'}`} onClick={onClick}></span>
  )
}

Tile.propTypes = {
  type: PropTypes.string,
  visited: PropTypes.bool
}

export default Tile