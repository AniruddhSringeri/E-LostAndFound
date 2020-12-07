import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input, FormText, Alert } from 'reactstrap';
import {useHistory} from "react-router-dom";
import axios from "../axios";
import { register } from '../actions/authActions'

import { connect } from 'react-redux'

function SignupForm(props){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [msg, setMsg] = useState(null)
    const history = useHistory()

    useEffect(()=>{
        const { error } = props
        if(error.id === 'REGISTER_FAIL'){
            setMsg(error.msg)
        }else {
            setMsg(null)
        }
    })

    function handleChange(event){
        const {name, value} = event.target
        if(name == "name") setName(value)
        else if(name == "email") setEmail(value)
        else setPassword(value)
    }

    function handleSubmit(event){
        event.preventDefault()
        
        // Create user object
        const newUser = {
            name,
            email,
            password
        }
        
        props.register(newUser)
        
        if(props.isAuthenticated){
            history.push('/lost')
        }
    }
    return(
        <div style = {{width:"30rem", border: "solid", borderWidth:"1px", borderRadius:"2%"}} >
            { msg? <Alert color="danger">{ msg }</Alert>: null}
            <Form style = {{width:"25rem", padding:"1rem"}}>
                <h2>Sign up</h2>
                <FormGroup>
                    <Label>Name</Label>
                    <Input name = "name" onChange = {handleChange} value = {name} placeholder = "Name"/>
                </FormGroup>
                <FormGroup style = {{padding:"1rem",width:"20rem"}}>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name="email" onChange = {handleChange} value = {email} id="exampleEmail" placeholder="enter e-mail" />
                </FormGroup>
                <FormGroup style = {{padding:"1rem", width:"20rem"}}>
                    <Label for="examplePassword">Password</Label>
                    <Input type="password" name="password" onChange = {handleChange} value = {password} id="examplePassword" placeholder="password placeholder" />
                </FormGroup>
                <Button color="success" onClick = {handleSubmit}>Sign up</Button>
                

            </Form>
            
        </div>
    )
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
})

export default connect(mapStateToProps,{ register })(SignupForm)