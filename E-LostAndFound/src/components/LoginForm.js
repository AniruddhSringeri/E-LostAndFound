import React, {useEffect, useState} from "react";
import { Button, Form, FormGroup, Label, Input, FormText, Alert } from 'reactstrap';
import {Link, useHistory} from "react-router-dom";
import axios from "../axios";

import { connect } from 'react-redux'
import { login } from '../actions/authActions'

function LoginForm(props){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [msg, setMsg] = useState(null)
    
    const history = useHistory()

    useEffect(()=>{
        const { error } = props
        if(error.id === 'LOGIN_FAIL'){
            setMsg(error.msg)
        }else {
            setMsg(null)
        }
    })

    function handleChange(event){
        const { name, value } = event.target
        name == "email"? setEmail(value): setPassword(value)
    }
    
    function handleSubmit(event){
        event.preventDefault()
        
        const User = {
            email,
            password
        }
        // Attempt to login
        props.login(User)
    
          
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6">
                <div style = {{ border: "solid", borderWidth:"1px", borderRadius:"2%"}} >
                { msg? <Alert color="danger">{ msg }</Alert>: null}
                <Form style = {{padding:"1rem"}}>
                <h2>Login</h2>
                <FormGroup style = {{padding:"1rem"}}>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name = "email" onChange = {handleChange} value = {email}  placeholder="enter e-mail" />
                </FormGroup>
                <FormGroup style = {{padding:"1rem"}}>
                    <Label for="examplePassword">Password</Label>
                    <Input type="password" name = "password" onChange = {handleChange} value = {password} placeholder="password placeholder" />
                </FormGroup>
                <Button color="success" onClick = {handleSubmit}>Log in</Button>
                

                </Form>
            
                </div>
                </div>
            </div>
        </div>
    )

}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
})

export default connect(mapStateToProps,{ login })(LoginForm)