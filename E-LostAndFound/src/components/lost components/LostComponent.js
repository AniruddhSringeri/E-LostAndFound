import React, { useState, useEffect } from "react";
import ItemCard from "../ItemCard";
import { Container, Row, Col } from 'reactstrap';
//import ItemsData from "./ItemsData";
import Intro from "../Intro";
import {Switch, Route, useParams, useLocation, useHistory} from "react-router-dom";
import ItemDetails from "../item details/ItemDetails";
import RegisterItem from "./RegisterItem";

import axios from '../../axios'

import { connect } from 'react-redux'
//import action from './actions/'

function LostComponent(props){

    const [ItemsData, setItemsData] = useState([])

    useEffect(() => {
        async function fetchData(){
            const req = await axios.get('/lost')

            setItemsData(req.data)
        }

        fetchData()
    }, [])

    const items = ItemsData.map((lost) =>{
            const {item} = lost
            return(
                
                <Col sm = "12" md = "6" xl = "3" lg = "4">
                    <ItemCard key = {lost._id} name = {item.name} img = {item.img} type = {item.category} desc = {item.description} id = {lost._id} flag = {1}/>
                </Col>
            ); 
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

                    <Container className="themed-container">
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
                <ItemDetails flag = {1}/>
            </Route>
        </Switch>
    )
}

function mapStateToProps(state){
    return {
        item: state.item
    }
}

export default connect(mapStateToProps, {})(LostComponent);