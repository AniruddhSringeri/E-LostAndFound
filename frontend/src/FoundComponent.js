import React, { useState, useEffect} from "react";
import ItemCard from "./ItemCard";
import { Container, Row, Col } from 'reactstrap';
//import ItemsData from "./ItemsData";
import UploadItem from "./UploadItem";
import Intro from "./Intro";
import { Switch, Route } from 'react-router-dom'
import ItemDetails from "./ItemDetails";

import axios from './axios'
function FoundComponent(){
    const [ItemsData, setItemsData] = useState([])

    useEffect(() => {
        async function fetchData(){
            const req = await axios.get('/found')

            setItemsData(req.data)
        }

        fetchData()
    }, [])

    const items = ItemsData.map((found) =>{
            const {item} = found
            return(
                
                <Col sm = "12" md = "6" xl = "3" lg = "4">
                    <ItemCard key = {found._id} name = {item.name} img = {item.img} type = {item.category} desc = {item.description} id = {found._id} flag = {0}/>
                </Col>
            );   
        
    }); 
    return(
        <Switch>
            <Route exact path = "/found">
                <div className = "found">
                    <Intro 
                    name = "Found" 
                    description = "Here you will find the list of items that have been registered as Lost. You can also upload the details of the item that you found"
                    />
                    <UploadItem />
                    <hr />
                    <h3 align = "center" style = {{fontSize:"3rem"}}>Items that are registered lost!</h3>
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
            <Route path = "/found/:id">
                <ItemDetails flag = {0} />
            </Route>
        </Switch>
    )
}

export default FoundComponent;