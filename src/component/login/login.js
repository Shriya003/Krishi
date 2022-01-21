import React, { useState } from "react"
import "./login.css"

const Login = ()=> {

    const [user,setUser]=useState({
    
        email:"",
        password:"",
     
     })
     
     const handleChange = e => {
         const{name,value}=e.target
     
         setUser({
             ...user,
             [name]:value
         })
     }
     
     




    return(
        <div className="main">
        <div className="login">
                {console.log("User",user)}
            <h1>Login</h1>
            <input type="text"name="email" value={user.email} placeholder="please enter your email"onChange={handleChange}></input>
            <input type="password"name="password" value={user.password} placeholder="please enter your password"onChange={handleChange}></input>
            <button className="button">login</button>
            or
            <button className="button">register</button>
            
        </div>
        </div>
    )
}
export default Login