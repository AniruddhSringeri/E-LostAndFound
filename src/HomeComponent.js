import React from "react"
import {Link} from "react-router-dom"
function HomeComponent() {
    return (
        <div>
            <h1>Heeyyyyyy!!!!Good to see you here</h1>
            <h2>Let me guess you found something?</h2>
            <p>Then quickly let the person who lost it know that the item is 
                safe with you by uploading the details of the item
            </p>
            <Link to = "/found">Found item</Link>

            <h2>I guessed it wrong?? You are the one who lost an object? Oh frick</h2>
            <p>Dont worry, someone might have found your object..stop crying and go to
                the lost page and see if you can find you object there by clicking the 
                link below
            </p>
            <Link to = "/lost">Lost item</Link>
            
        </div>
    )
}

export default HomeComponent