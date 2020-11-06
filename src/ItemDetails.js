import React from "react"
import { useParams } from "react-router-dom"
import ItemsData from "./ItemsData"

function ItemDetails(props){
    const {id} = useParams()
    const item = ItemsData.find(i => i.id == id)
    return (
        <div>
            <img src = {item.img} />
            <h1>{item.name}</h1>
            <h2>{item.description}</h2>
            <h3>{item.type}</h3>
            <button>Yes this is mine</button>
        </div>
    )
}

export default ItemDetails