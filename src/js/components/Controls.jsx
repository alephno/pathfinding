import React from 'react'

function Controls() {
  return (
    <div className='algo-controls'>
      <select>
        <option value="Dijkstra" selected>Dijkstra</option>
      </select>
      <button>Start</button>
      <button>Clear</button>
      <button>Reset</button>
    </div>
  )
}

export default Controls