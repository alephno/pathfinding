import React, { useState } from 'react'
import Controls from './Controls.jsx'
import Grid from './Grid.jsx'

function App() {
  const [animate, setAnimate] = useState(false)

  function handleSolve() {
    setAnimate(!animate)
  }

  return (
    <div className="center">
      <Controls handleSolve={handleSolve} />
      <Grid width={20} height={20} animate={animate}/>
    </div>
  )
}

export default App