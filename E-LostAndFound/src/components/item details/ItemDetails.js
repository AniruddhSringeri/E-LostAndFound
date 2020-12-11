import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { Button,Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import axios from '../../axios'
import RegisterItemAgain from "./RegisterItemAgain";
import UploadItemAgain from "./UploadItemAgain";
function ItemDetails(props){
    const {id} = useParams()

    const [ItemData, setItemData] = useState({})

    useEffect(() => {
        async function fetchData(){
            if(props.flag == 0){
                const req = await axios.get(`/found/${id}`)
                setItemData(req.data.item)
            }
            else{
                const req = await axios.get(`/lost/${id}`)
                setItemData(req.data.item)
            }
        }

        fetchData()
    }, [])

    
    console.log(ItemData)
    const item = ItemData
    
    
    console.log(item)
    return (
        <div className="container">
            <div className="row">
            <div className="col col-md-6" style = {{padding:"4rem"}}>
            <Card>
                <CardImg top src = {item.img} top width="100%" alt={item.name}/>
                <CardBody>
                    <CardTitle>Name: {item.name}</CardTitle>
                    <CardText>{item.description}</CardText>
                    <CardText>Type: {item.category}</CardText>
                    <CardText>{item.flag == 0 ? <RegisterItemAgain/> : <UploadItemAgain/>}</CardText>
                </CardBody>
            </Card>
            </div>
            </div>
        </div>
    )
}

export default ItemDetails;
