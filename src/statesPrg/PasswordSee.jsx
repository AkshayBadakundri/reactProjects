import React from 'react'
import EYE from "./eye.png"
import { useState } from "react"
const PasswordSee = () => {

    let [password,setPassword]=useState(true)
    let ShowPassword=()=>{
        if(password == true)
        {
            setPassword(!true)
        }else{
            setPassword(!false)
        }
    }

  return (
    <div>
    <input type={password ? "text":"password"} name="" id='' />   
    <img src={EYE} alt="" height="10px" width="10px" onClick={ShowPassword} /> 
    </div>
  )
}

export default PasswordSee;