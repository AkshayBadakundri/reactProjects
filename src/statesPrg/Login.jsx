import React from 'react'
import { useState } from 'react';
import Signup from './Signup';
// import "./login.module.css";
import { redirect } from 'react-router-dom';


const Login = () => {

    let[Username,setUsername]=useState("")
    let[Password,setPassword]=useState("")
    let[create,setCreate]=useState(true)
    let handaleSubmit=(e)=>{
        e.preventDefault()
        console.log({Username,Password});
        localStorage.setItem("Username",Username)
        localStorage.setItem("Password",Password)
    }
    if(create==false)
    {
        <redirect to="/Signup"/>
    }
   
  return (
    <div>

        <form action="" onSubmit={handaleSubmit}>
        <label htmlFor="Username"> Username</label> <br />
        <input type="text" id="Username" onChange={(e)=>{
            setUsername(e.target.value)
        }} />
        <br />
        <label htmlFor="Password">Password</label> <br />
        <input type="text" id='Password' onChange={(e)=>{
            setPassword(e.target.value)
        }} />
        <br />
        <button>Submit</button>
        </form>
        <a href="" onClick={()=> setCreate(false)} >create Account</a>
    </div>
  )
}

export default Login