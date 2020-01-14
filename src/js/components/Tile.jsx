import React, { useState } from 'react'
import PropTypes from 'prop-types'

const tileClasses = {
  'empty': 'tile-empty',
  'wall': 'tile-wall',
  'start': 'tile-start',
  'end': 'tile-end'
}

function Tile({ type, visited }) {
  return (
    <span className={`${tileClasses[type]} ${visited ? 'tile-visited' : 'tile-unvisited'}`}></span>
  )
}

Tile.propTypes = {
  type: PropTypes.string,
  visited: PropTypes.bool
}

export default Tile