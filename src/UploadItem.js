import React from "react"
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

function UploadItem(){
    return (
        <div style = {{padding:"4em", alignContent:"center"}}>
        <div style = {{padding:"2em",borderStyle: "solid", borderRadius: "2%", width:"20rem", fontSize:"1.5rem"}}>
            <h3>Enter details of the found item</h3><br />
            <Form >
                <FormGroup>
                    <Label for="Name">Name</Label>
                    <Input name="ItemName" id="Name" style = {{width: "12rem"}} placeholder="Name of the item" />
                </FormGroup>
                <FormGroup>
                    <Label for="Place">Place</Label>
                    <Input name="FoundPlace" id="Place" style = {{width: "12rem"}} placeholder ="Place where you found it" />
                </FormGroup>
                <FormGroup style = {{width: "12rem"}}>
                    <Label for="exampleSelect">Category</Label>
                    <Input type="select" name="select" id="exampleSelect">
                    <option>Electronic</option>
                    <option>Stationary</option>
                    <option>Jewellry</option>
                    <option>Something</option>
                    <option>Other</option>
                    </Input>
                </FormGroup>
                <Button>Upload</Button>

            </Form>
        </div>
        </div>
    )
}
export default UploadItem