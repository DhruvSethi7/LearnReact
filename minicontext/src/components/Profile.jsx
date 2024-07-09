import React,{useContext} from 'react'
import UserContext from '../context/usercontext'

function Profile() {
    const {user}=useContext(UserContext)
    if(!user)return <div>Please Login First</div>
    
    return  <div>{user.username}</div>
  
}

export default Profile