import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { Button,Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import axios from '../../axios'
import RegisterItemAgain from "./RegisterItemAgain";
import UploadItemAgain from "./UploadItemAgain";

function bufferToBase64(buf) {
    var binstr = Array.prototype.map.call(buf, function (ch) {
        return String.fromCharCode(ch);
    }).join('');
    return btoa(binstr);
}
function ItemDetails(props){
    const {id} = useParams()

    const [ItemData, setItemData] = useState({})
    const [image, setImage] = useState({});


    useEffect(() => {
        console.log("aaa")
        async function fetchData(){
            if(props.flag == 0){
                console.log("sada")
                await axios.get(`/found/${id}`)
                .then(res => {
                    setItemData(res.data)
                    setImage(res.data.productImage.data.data)
                })
            }
            else{
                console.log("saaa")
                await axios.get(`/lost/${id}`)
                .then(res => {
                    setItemData(res.data)
                   // console.log(res.data)
                    setImage(res.data.productImage.data.data)
                    //console.log(ItemData)
                })
                .then(() =>{
                    console.log("bbbb");
                    //var data = new Uint8Array(ItemData.productImage.data.data);
                   // var base64 = bufferToBase64(data);
                   // console.log(base64)
                   // setImage(base64)
                })
            }
        }

        fetchData()
        

    }, [])
   // console.log(ItemData)
   // console.log(image)
    var flag = new Uint8Array(image);
    var base64 = bufferToBase64(flag)
   // console.log(base64)
/*
    useEffect(() => {
        console.log("bbbb");
        console.log(ItemData)
        var data = new Uint8Array(ItemData.productImage.data.data);
        var base64 = bufferToBase64(data);
        setImage(base64)
    }, [])

   // console.log()
   // console.log(ItemData)
    //src={`data:image/png;base64,${base64}`}
    */
    return ( 
        <div className="container">
            <div className="row">
            <div className="col col-md-6" style = {{padding:"4rem"}}>
            <Card>
                <CardImg top src={`data:image/png;base64,${base64}`} width="100%" alt={ItemData.name}/>
                <CardBody>
                    <CardTitle>Name: {ItemData.name}</CardTitle>
                    <CardText>{ItemData.desp}</CardText>
                    <CardText>Type: {ItemData.typeob}</CardText>
                    <CardText>{ItemData.flag == 0 ? <RegisterItemAgain/> : <UploadItemAgain/>}</CardText>
                </CardBody>
            </Card>
            </div>
            </div>
        </div>
    )
}

export default ItemDetails;
