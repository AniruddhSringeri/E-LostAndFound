import React from "react";
import {useHistory} from "react-router-dom";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';



function ItemCard(props) {
    const history = useHistory();

    return (
    <div style = {{paddingTop:"2em"}} >
      <Card className = "card">
        <CardImg top width="100%" src= {props.img} alt="Card image cap"/>
        <CardBody>
          <CardTitle>{props.name}</CardTitle>
          <CardSubtitle>{props.type}</CardSubtitle>
          <CardText>{props.desc}</CardText>
    <Button onClick = {() => history.push(`/${props.flag==0? "found": "lost"}/${props.id}`)}>{props.flag == 0 ? "Claim":"Already Found"}</Button>
        </CardBody>
      </Card>
    </div> 
    
    )
}
export default ItemCard;