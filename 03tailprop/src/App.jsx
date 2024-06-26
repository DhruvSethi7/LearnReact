import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
  <div class="shrink-0">
    <img class="h-12 w-12" src="/assets/react.svg" alt="ChitChat Logo"></img>
  </div>
  <div>
    <div class="text-xl font-medium text-green">ChitChat</div>
    <p class="text-slate-500">You have a new message!</p>
  </div>
</div>
    </>
  )
}

export default App
