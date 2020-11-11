import React from "react";
import { useParams } from "react-router-dom";
import ItemsData from "./ItemsData";
import RegisterItemAgain from "./RegisterItemAgain";
import UploadItemAgain from "./UploadItemAgain";
function ItemDetails(props){
    const {id} = useParams()
    const item = ItemsData.find(i => i.id == id)
    return (
        <div align = "center" style = {{padding:"4rem"}}>
        <div style = {{border:"solid", width:"40rem", padding:"3rem", align:"center", borderRadius:"2%"}}>
            <img src = {item.img} style={{height:"20rem",width:"20rem"}}/>
            <hr />
            <h2>Name: {item.name}</h2>
            <h2>{item.description}</h2>
            <h3>Type: {item.type}</h3>
            <br />
            {item.flag == 0 ? <RegisterItemAgain/> : <UploadItemAgain/>}
            
        </div>
        </div>
    )
}

export default ItemDetails;
