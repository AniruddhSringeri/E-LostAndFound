import React from "react";
import {useHistory} from "react-router-dom";

function Intro(props){
    const history = useHistory();
    return (
       
            <div class = "intro" style = {{paddingTop:"3em"}}>
            <h1>Welcome to the {props.name} page</h1> <br/>
            <p style = {{fontSize: "1.2rem"}}>{props.description}
            <br />
            <br />
            <h2>{props.name} an item? Upload details here</h2>
            </p>
            <br />
            </div>
            
    )
}

export default Intro;