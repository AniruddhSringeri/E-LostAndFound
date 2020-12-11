import React, { useState, useEffect } from "react"
import {useHistory} from "react-router-dom"
import { Card, Button, CardTitle, CardText, Row, Col, Jumbotron, Container, ButtonGroup } from 'reactstrap';



function HomeComponent() {
    const history = useHistory()
    const [loggedIn, setLoggedIn] = useState(false)
    return (
        <div>
            <Jumbotron>
                <Container fluid className="container">
                    <div className="welcome col-12 col-md-6">
                        <h1 style={{color: "rgb(247, 227, 200)", fontSize: "60px"}}>Welcome!</h1><br />
                        <h2 style={{fontWeight: "bold"}}>This is the place to find your lost item, or to report a found item.</h2><br />
                        <ButtonGroup size="lg col-12 col-md-6">
                          <Button style={{fontWeight: "bold"}} color="primary" onClick={() => {history.push("/signup")}}>Sign-up</Button>
                          <Button style={{fontWeight: "bold"}} color="primary" onClick={() => {history.push("/login")}}>Login</Button>
                        </ButtonGroup>
                    </div>
                </Container>
            </Jumbotron>
                    <h3 className="col-md-6">First, login to your BMSCE account. If you don't have an account, sign-up below.</h3>
                    <Row>
                        <Col md="6" style={{padding: "30px", paddingTop: "0px", textAlign: "center"}}>
                          <Card body >
                            <CardTitle tag="h2">Lost something?</CardTitle>
                            <CardText>Click here to search for your item.</CardText>
                            <Button color="danger" onClick={() => {history.push("/lost")}}>Lost</Button>
                          </Card>
                        </Col>
                        <Col md="6" style={{padding: "30px", paddingTop: "0px", textAlign: "center"}}>
                          <Card body>
                            <CardTitle tag="h2">Found something?</CardTitle>
                            <CardText>Click here to return the found object.</CardText>
                            <Button color="success" onClick={() => {history.push("/found")}}>Found</Button>
                          </Card>
                        </Col>
                    </Row>
            
        </div>
    )
}

export default HomeComponent