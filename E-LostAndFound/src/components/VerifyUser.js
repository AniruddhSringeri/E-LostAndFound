import axios from '../axios'
import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'
import { connect } from 'react-redux'
function VerifyUser(props) {

    const [otp, setOTP] = useState()
    const history = useHistory()

    function handleSubmit(event){
        event.preventDefault()
        console.log(props.id)
        axios.post('/verifyOTP', {OTP: otp, user_id: props.id})
          .then(res => {
            history.push('/')  
            console.log(res)})
          .catch(err => console.log(err.response))
    }

    function handleChange(event){
        setOTP(event.target.value)
    }

    return (
        <div>
            
            <form>
                <h1>Enter otp</h1>
                <input value = {otp} onChange = {handleChange} type = "text" placeholder = "OTP"/>
                <button onClick = {handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

function mapStateToProps(state){
    console.log(state.auth.user)
    if(state.auth.user){
        return {id: state.auth.user.id}
    }
    return {}
}


export default connect(mapStateToProps, {})(VerifyUser);

