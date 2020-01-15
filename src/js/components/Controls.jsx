import React from 'react'

function Controls({ handleSolve }) {
  return (
    <div className='algo-controls'>
      <select defaultValue="Dijkstra">
        <option value="Dijkstra">Dijkstra</option>
      </select>
      <button onClick={handleSolve}>Start</button>
      <button>Clear</button>
      <button>Reset</button>
    </div>
  )
}

export default Controls