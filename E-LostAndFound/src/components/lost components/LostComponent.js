import React, { useState, useEffect } from "react";
import ItemCard from "../ItemCard";
import { Container, Row, Col } from 'reactstrap';
//import ItemsData from "./ItemsData";
import Intro from "../Intro";
import {Switch, Route, useParams, useLocation, useHistory} from "react-router-dom";
import ItemDetails from "../item details/ItemDetails";
import RegisterItem from "./RegisterItem";
import Map from "../Map"

import axios from '../../axios'

import { connect } from 'react-redux'
//import action from './actions/'
function bufferToBase64(buf) {
    var binstr = Array.prototype.map.call(buf, function (ch) {
        return String.fromCharCode(ch);
    }).join('');
    return btoa(binstr);
}

function LostComponent(props){

    const [ItemsData, setItemsData] = useState([])

    useEffect(() => {
        console.log(props)
    

        async function fetchData(){
            const req = await axios.get('/lost')

            setItemsData(req.data)
        }

        fetchData()
    }, [])


    const items = ItemsData.map((lost) =>{
            // const {item} = lost
            
            console.log(lost.productImage.data.data)
            var data = new Uint8Array(lost.productImage.data.data);

            var base64 = bufferToBase64(data);

            // const base64 = convert(lost.productImage.data)

            
            return(
                
                <Col sm = "12" md = "6" xl = "3" lg = "4">
                    <ItemCard key = {lost._id} name = {lost.name} img = {base64} type = {lost.typeob} desc = {lost.descp} id = {lost._id} flag = {1}/>
                </Col>
            ); 
    }); 


    
    return (
        <Switch>
            <Route exact path = "/lost">
                <div className = "Lost">
                    <Intro 
                    name = "Lost" 
                    description = "Here you will find the list of items that have been registered as lost. Before uploading, check if your item is present in the found page "
                    />

                    <RegisterItem />
                    <hr />
                    <h3 align = "center" style = {{fontSize:"3rem"}}>Lost items</h3>
                    <br/>
                    <Map />
                    <Container className="themed-container">
                        <Row>
                            {items}
                        </Row>
                    </Container>
                    <br />
                    
                    
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