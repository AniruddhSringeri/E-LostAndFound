import React, {useState} from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import MultiStep from 'react-multistep';
import StepOne from './stepOne';
import StepTwo from './stepTwo';
import StepThree from './stepThree';
import {Switch, Route, Link} from "react-router-dom";
import StepFour from './stepFour';

function RegisterItem(props) {
    const {
        buttonLabel,
        className
      } = props;
    
    const [modal, setModal] = useState(false);
    const steps = [
        { component: <StepOne /> },
        { component: <StepTwo /> },
        { component: <StepThree /> },
        { component: <StepFour /> }
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
          <Modal isOpen={modal} toggle={toggle} className={className} style={{width:"50rem"}}>
            <ModalHeader toggle={toggle}>Modal title</ModalHeader>
            <ModalBody style={{width:"50rem"}}>        
                <div>
                    <MultiStep steps={steps} prevStyle={prevStyle} nextStyle={nextStyle}/>
                </div>       
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={toggle}>Submit</Button>{' '}
              <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
          </Modal>
        </div>
        </div>
      );
  }

export default RegisterItem;