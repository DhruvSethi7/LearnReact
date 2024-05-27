import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCount] = useState(0)
  function increaseVal() {
    if(counter==20)return
    setCount(counter+1)
  }
  function decreaseVal() {
    if(counter==0)return
    setCount(counter-1)
  }
  return (
    <>
      <h2>Counter value {counter} </h2>
      <button onClick={increaseVal}>Increase Value</button>
      <button onClick={decreaseVal}>Decrease Value</button>
      <p>Understand the importance of hooks--they are used to propogate the changes when a change occurs in variable</p>
    </>
  )
}

export default App
