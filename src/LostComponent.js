import React from "react";
import ItemCard from "./ItemCard";
import { Container, Row, Col } from 'reactstrap';
import ItemsData from "./ItemsData";
import Intro from "./Intro";
import {Switch, Route, Link} from "react-router-dom";
import IteamDetails from "./ItemDetails";
import RegisterItem from "./RegisterItem";

function LostComponent(){
    
    const items = ItemsData.map((item) =>{
        if(item.flag == 0){
            return(
                <Col sm = "12" md = "6" xl = "3" lg = "4">
                <ItemCard key = {item.id} name = {item.name} img = {item.img} type = {item.type} id = {item.id} flag = {item.flag}/>
                </Col>
                );   
        }
    }); 
    
    return (
        <Switch>
            <Route exact path = "/lost">
                <div className = "Lost">
                    <Intro 
                    name = "Lost" 
                    description = "Here you will find the list of items that have been found. If you can't find your lost item, you can upload the details of that item and we will get back to you if someone finds it"
                    />

                    <RegisterItem />
                    <hr />
                    <h3 align = "center" style = {{fontSize:"3rem"}}>Found items</h3>
                    <br/>

                    <Container className="themed-container" fluid={true}>
                        <Row>
                            {items}
                        </Row>
                    </Container>
                    <br />
                    <hr />
                    
                    <br />
                    
                </div>
            </Route>
            <Route path = "/lost/:id">
                <IteamDetails />
            </Route>
        </Switch>
    )
}

export default LostComponent;