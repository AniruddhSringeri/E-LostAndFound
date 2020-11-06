import React from "react";
import {useHistory} from "react-router-dom";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

import ItemsData from "./ItemsData";

function ItemCard(props) {
    const history = useHistory();

    return (
    <div style = {{paddingTop:"2em"}} >
      <Card className = "card">
        <CardImg top width="100%" src= {props.img} alt="Card image cap"/>
        <CardBody>
          <CardTitle>{props.name}</CardTitle>
          <CardSubtitle>{props.type}</CardSubtitle>
          <CardText>Some quick example text to build on the card title
               and make up the bulk of the card's content.</CardText>
    <Button onClick = {() => history.push(`/lost/${props.id}`)}>{props.flag == 0 ? "Claim":"Already Found"}</Button>
        </CardBody>
      </Card>
    </div> 
    
    )
}
export default ItemCard;