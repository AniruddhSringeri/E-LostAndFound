import React, { useState, useEffect } from "react"
import {useHistory} from "react-router-dom"
import { Card, Button, CardTitle, CardText, Row, Col, Jumbotron, Container, ButtonGroup } from 'reactstrap';



function HomeComponent() {
    const history = useHistory()
    const [loggedIn, setLoggedIn] = useState(false)
    return (
        <div>
            <Jumbotron fluid className="jumbotron">
                <Container fluid className="container">
                    <div className="welcome" style={{textAlign:"center"}}>
                        <h1 style={{color: "rgb(247, 227, 200)", fontSize: "60px"}}>Welcome!</h1><br />
                        <h2 style={{fontWeight: "bold"}}>This is the place to find your lost item, or to report a found item.</h2><br />
                        <h3>First, login to your BMSCE account. If you don't have an account, sign-up below.</h3><br /><br />
                        <ButtonGroup size="lg">
                          <Button style={{fontWeight: "bold"}} color="primary" onClick={() => {history.push("/signup")}}>Sign-up</Button>
                          <Button style={{fontWeight: "bold"}} color="primary" onClick={() => {history.push("/login")}}>Login</Button>
                        </ButtonGroup>
                    </div>
                    <Row>
                        <Col md="5" style={{padding: "30px", paddingTop: "0px", textAlign: "center"}}>
                          <Card body className="cardhome">
                            <CardTitle tag="h2">Lost something?</CardTitle>
                            <CardText>Click here to search for your item.</CardText>
                            <Button color="danger" onClick={() => {history.push("/lost")}}>Lost</Button>
                          </Card>
                        </Col>
                        <Col md="5" style={{padding: "30px", paddingTop: "0px", textAlign: "center"}}>
                          <Card body className="cardhome">
                            <CardTitle tag="h2">Found something?</CardTitle>
                            <CardText>Click here to return the found object.</CardText>
                            <Button color="success" onClick={() => {history.push("/found")}}>Found</Button>
                          </Card>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
            
        </div>
    )
}

export default HomeComponent


/*
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
*/