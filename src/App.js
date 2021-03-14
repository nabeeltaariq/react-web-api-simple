import React, { useEffect, useRef } from 'react'
import './App.css'
import useWebAnimations, { bounce } from '@wellyshen/use-web-animations'

function App() {
  const { ref, playState, getAnimation } = useWebAnimations({
    ...bounce,
  })
  setInterval(() => {
    getAnimation().play()
  }, 1000)

  return (
    <div className='container'>
      <p>🍿 Animation is {playState}</p>
      <div className='target' ref={ref}></div>
      Current State of Animation : {playState}
      <button onClick={() => getAnimation().pause()}>Stop</button>
      <button onClick={() => getAnimation().play()}>Play</button>
    </div>
  )
}

export default App
