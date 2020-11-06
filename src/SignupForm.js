import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {Link} from "react-router-dom";

function SignupForm(){
    return(
        <div style = {{width:"30rem", border: "solid", borderWidth:"1px", borderRadius:"2%"}} >
            <Form style = {{width:"25rem", padding:"1rem"}}>
                <h2>Sign up</h2>
                <FormGroup style = {{padding:"1rem",width:"20rem"}}>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="enter e-mail" />
                </FormGroup>
                <FormGroup style = {{padding:"1rem", width:"20rem"}}>
                    <Label for="examplePassword">Password</Label>
                    <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                </FormGroup>
                <Button color="success" component={Link} to="/lost">Sign up</Button>
                

            </Form>
            
        </div>
    )
}
export default SignupForm;