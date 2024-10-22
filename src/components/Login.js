import React from "react"
import { useNavigate } from "react-router-dom"

export default function Login() {
    const navigate = useNavigate();
    
    function onSubmit() {   
          //Code for checkimg user credentials
          //If creditials is valid , login success 
          navigate('/dashboard'); 
    }
    return <>
    <h1>Login Page</h1>
    <button onClick={onSubmit}>Login</button>
    </>
}