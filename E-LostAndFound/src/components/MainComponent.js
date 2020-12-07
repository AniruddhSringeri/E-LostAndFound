import React from "react";
import {Switch, Route} from "react-router-dom";
import HomeComponent from "./HomeComponent";
import LostComponent from "./lost components/LostComponent";
import FoundComponent from "./found components/FoundComponent";
import LoginComponent from "./LoginComponent";
import SignupComponent from "./SignupComponent";

function MainComponent(){
    return (
        <Switch>
            <Route exact path = "/"><HomeComponent /></Route>
            <Route path = "/login"><LoginComponent /></Route>
            <Route path = "/found"><FoundComponent /></Route>
            <Route path = "/lost"><LostComponent /></Route>
            <Route path = "/signup"><SignupComponent /></Route>
        </Switch>
    )
}

export default MainComponent;