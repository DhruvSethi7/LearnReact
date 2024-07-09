import React, { useState,useContext } from 'react'
import UserContext from '../context/usercontext';
function Login() {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const context = useContext(UserContext)
  console.log(context);
  const setUser =context.setUser;
  const gobi=context.gobi;
  function handleSubmit(){
    
    setUser({'username':username,'password':password})
    console.log(context);
  }
  return (
    <>
    <div>Login</div>
    <input type="text" value={username} onChange={(e)=>setusername(e.target.value)} placeholder='Username'/>
    <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)} placeholder='Password'/>
    <br />
    <div>{gobi}</div>
    <button onClick={handleSubmit}>Submit</button>
    </>
     )
}

export default Login