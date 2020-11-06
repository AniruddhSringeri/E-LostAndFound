import React from "react"
import {Link, useHistory} from "react-router-dom"
import { Card, Button, CardTitle, CardText, Row, Col, Jumbotron, Container, ButtonGroup } from 'reactstrap';



function HomeComponent() {
    const history = useHistory()
    return (
        <div>
            <Jumbotron fluid className="jumbotron">
                <Container fluid className="container">
                    <div className="welcome" style={{textAlign:"center"}}>
                        <h1>Welcome!</h1>
                        <h2>This is the place to find your lost item, or to report that you have found an item.</h2>
                        <h3>First, login to your BMSCE account. If you don't have an account, sign-up below.</h3>
                        <ButtonGroup size="lg">
                          <Button color="primary" onClick={() => {history.push("/signup")}}>Sign-up</Button>
                          <Button color="primary" onClick={() => {history.push("/login")}}>Login</Button>
                        </ButtonGroup>
                    </div>
                    <Row>
                        <Col sm="3">
                          <Card body className="card">
                            <CardTitle tag="h5">Lost something?</CardTitle>
                            <CardText>Don't worry. Click here to search for your item.</CardText>
                            <Button color="danger" onClick={() => {history.push("/lost")}}>Lost</Button>
                          </Card>
                        </Col>
                        <Col sm="3">
                          <Card body className="card">
                            <CardTitle tag="h5">Found something?</CardTitle>
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