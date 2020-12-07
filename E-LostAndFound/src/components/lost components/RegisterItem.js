import React, {useState, useEffect} from "react";
import { Button } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter, Alert } from 'reactstrap';
import MultiStep from 'react-multistep';
import StepOne from './stepOne';
import StepTwo from './stepTwo';
import StepThree from './stepThree';
import StepFour from './stepFour';

import axios from '../../axios'
import store from "../../store";

import { connect } from "react-redux"

function RegisterItem(props) {
    const [YourName, setYourName] = useState('');
    const [ObjectName, setObjectName] = useState('');
    const [place, setPlace] = useState('');
    const [typeob, setTypeob] = useState('');
    const [descpob, setDescpob] = useState('');
    const [pictures, setPictures] = useState([]);
    const [checked, setChecked] = useState('')
    const [picture, setPicture] = useState('')

    const [error, setError] = useState('')
    
    var reader  = new FileReader()
    // const [state, setState] = useState({
    //   YourName: "",
    //   ObjectName: "",
    //   place:"",
    //   typeob: "",
    //   descpob: "",
    //   pictures: "",
    //   checked: ""
    // })
    const {
        buttonLabel,
        className
      } = props;
    
    useEffect(()=>{
      console.log(pictures[0])
    }, [pictures])

    function handleChange(event){
      if(!event.name){
        setPictures([...pictures, event])
        return
      }
      const { name, value } = event.target
      
      
      if(name == "YourName"){
        setYourName(value)
      }
      else if(name == "ObjectName"){
        setObjectName(value)
      }
      else if(name == "Place"){
        setPlace(value)
      }
      else if(name == "typeob"){
        setTypeob(value)
      }
      else if(name == "descpob"){
        setDescpob(value)
      }
      else if(name == "checked"){
        setChecked(value)
      }

    }

    function handleSubmit(event){
      event.preventDefault()
      console.log(pictures)
      axios.post('/lost', {
        user_id: props.userId,
        place_lost: place,
        item: {
          name: ObjectName,
          category: typeob,
          description: descpob,
          img: {data:pictures[0], contentType:"image/png"}
      }

      })
      .then(function (response) {
        console.log(response);
        toggle()
      })
      .catch(function (error) {
        setError(error.response.data.msg)
        console.log(error);
      });
    }

    const [modal, setModal] = useState(false);
    const steps = [
        { component: <StepOne 
          handleChange={handleChange}
          YourName = {YourName}
          ObjectName = {ObjectName}
          place = {place}
        /> },
        { component: <StepTwo 
          handleChange={handleChange}          
          typeob = {typeob}
          descpob = {descpob}

        /> },
        { component: <StepThree 
          handleChange={handleChange}
          pictures = {pictures}
        /> },
        { component: <StepFour 
          handleChange={handleChange}
          checked = {checked}
          /> }
        ]

    const prevStyle = {'background-color': 'blue',
    'border': 'none',
    'color': 'white',
    'padding': '11px',
    'text-align': 'center',
    'text-decoration': 'none',
    'display': 'inline-block',
    'font-size': '13px'}  
    const nextStyle = {'background-color': '#4CAF50',
    'border': 'none',
    'color': 'white',
    'padding': '11px',
    'text-align': 'center',
    'text-decoration': 'none',
    'display': 'inline-block',
    'font-size': '13px'}

    
      const toggle = () => setModal(!modal);
      return (
        
        <div className = "Formupl" align="center">
        <div>
          <Button color="danger" onClick={toggle}>{buttonLabel}Lost</Button>
          <img src = {pictures[0]? pictures[0].reader: null} />
          <Modal isOpen={modal} toggle={toggle} className={className} style={{width:"50rem"}}>
            <ModalHeader toggle={toggle}>Modal title</ModalHeader>
            { error? <Alert color="danger">{ error }</Alert>: null}
            <ModalBody style={{width:"50rem"}}>        
                <div>
                    <MultiStep steps={steps} prevStyle={prevStyle} nextStyle={nextStyle} />
                </div>       
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={handleSubmit}>Submit</Button>{' '}
              <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
          </Modal>
        </div>
        </div>
      );
  }

function mapStateToProps(state){
  if(state.auth.user){
    return {
      userId: state.auth.user._id
    }
  }
}

export default connect(mapStateToProps, {})(RegisterItem);