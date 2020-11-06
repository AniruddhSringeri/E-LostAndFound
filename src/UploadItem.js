import React, {useState} from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import MultiStep from 'react-multistep';
import StepOne from './stepOne';
import StepTwo from './stepTwo';
import StepThree from './stepThree';
import StepFour from './stepFour';

function UploadItem(props) {
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
        
          <Button color="danger" onClick={toggle}>{buttonLabel}Found</Button>
          <div >
          <Modal isOpen={modal} toggle={toggle} style={{width:"50rem"}}>
            
            <ModalHeader toggle={toggle} >Modal title</ModalHeader>
            <div>
            <ModalBody  style={{width:"50rem"}}>        
                <div>
                    <MultiStep steps={steps} prevStyle={prevStyle} nextStyle={nextStyle}/>
                </div>       
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={toggle}>Submit</Button>{' '}
              <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
            </div>
          </Modal>
        </div>
        </div>
      );
  }

export default UploadItem;