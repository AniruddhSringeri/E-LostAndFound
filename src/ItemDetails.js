import React from "react";
import { useParams } from "react-router-dom";
import ItemsData from "./ItemsData";
import RegisterItemAgain from "./RegisterItemAgain";
import UploadItemAgain from "./UploadItemAgain";
function ItemDetails(props){
    const {id} = useParams()
    const item = ItemsData.find(i => i.id == id)
    return (
        <div style={{padding:"5rem"}}>
            <img src = {item.img} style={{height:"40rem",width:"40rem"}}/>
            <h1>{item.name}</h1>
            <h2>{item.description}</h2>
            <h3>{item.type}</h3>
            {item.flag == 0 ? <RegisterItemAgain/> : <UploadItemAgain/>}
        </div>
    )
}

export default ItemDetails;
