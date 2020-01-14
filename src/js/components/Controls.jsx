import React from 'react'

function Controls() {
  return (
    <div className='algo-controls'>
      <select defaultValue="Dijkstra">
        <option value="Dijkstra">Dijkstra</option>
      </select>
      <button>Start</button>
      <button>Clear</button>
      <button>Reset</button>
    </div>
  )
}

export default Controls