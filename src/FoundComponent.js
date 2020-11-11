import React from "react";
import ItemCard from "./ItemCard";
import { Container, Row, Col } from 'reactstrap';
import ItemsData from "./ItemsData";
import UploadItem from "./UploadItem";
import Intro from "./Intro";
function FoundComponent(){
    const items = ItemsData.map((item) => {
        if(item.flag == 1){
            return (
            <Col sm = "12" md = "6" xl = "3" lg = "4">
                <ItemCard key = {item.id} name = {item.name} img = {item.img} type = {item.type} id = {item.id} flag = {item.flag}/>
            </Col>
            )};
            
    });
    return(
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
    )
}

export default FoundComponent;