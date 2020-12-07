import React from "react";
import LoginForm from "./LoginForm";
import {useLocation} from 'react-router-dom'
function LoginComponent(){
    const location = useLocation()
    return (
        <div align = "center" style = {{padding:"4rem"}}>
            <h2>{location.state? location.state.msg: ""}</h2>
            <LoginForm />
        </div>
    )
} 

export default LoginComponent;