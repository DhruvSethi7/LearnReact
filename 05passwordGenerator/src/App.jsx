import { useCallback, useEffect, useRef, useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [length,setLength]=useState(8)
  const [isNumberAllowed,setNumber]=useState(false)
  const [isCharAllowed,setChar]=useState(false)
  const [password,setPassword]=useState("")

  const passwordRef=useRef(null)
  // let password=""
  let passwordGenerator=useCallback(()=>{
    // console.log(runn);
    console.log(isNumberAllowed);
    let str='abcdefghijklmnopqrstuvwxyz'
    let pass=""
    if(isNumberAllowed)str+='0123456789'
    if(isCharAllowed)str+='!@#$%^&&*()'
    for (let i = 0; i < length; i++) {
      let index=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(index)
    }
    setPassword(pass)
  },
  [[length,isNumberAllowed,isCharAllowed]]
)
  useEffect(passwordGenerator,[length,isNumberAllowed,isCharAllowed])
 
  function copyToClipBoard() {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
    alert(`Copied succesffully ${password}`)
  }

  return (
    <>
      <h3>Password Generator</h3>
      <label >Number<input type="checkbox"  onClick={()=>setNumber(!isNumberAllowed)}/></label><br /><br />
      <label >Character<input type="checkbox" onClick={()=>setChar(!isCharAllowed)}/></label>
      <br /><br />
      <label >Length {length}<input type="range" min={6} max={20} value={length} onChange={(val)=>setLength(val.target.value)}/></label>
      <br /><br />
      <input type="text" ref={passwordRef} value={password} readOnly style={{color:'orange'}}/>
      <button style={{}} onClick={copyToClipBoard}>Copy</button>
    </>
  )
}

export default App
