import React, { useState, useEffect } from "react"
import {useHistory} from "react-router-dom"
import { Card, Button, CardTitle, CardText, Row, Col, Jumbotron, Container, ButtonGroup } from 'reactstrap';
import './homeComponent.css'
import ItemCard from './ItemCard.js'

function HomeComponent() {
    const history = useHistory()
    const [loggedIn, setLoggedIn] = useState(false)
    return (
        <div>
            <Jumbotron>
                <Container fluid className="container">
                    
                  <div className="welcome col-md-12">
                    <h1>Welcome!</h1><br />
                    <h2>This is the place to find your lost item, or to report a found item.</h2><br />
                    <h3 className="">First, login to your BMSCE account. If you don't have an account, sign-up below.</h3>
                    <ButtonGroup size="lg col-12 col-md-6">
                      <Button className = "button-login-signup" color="primary" onClick={() => {history.push("/signup")}}>Sign-up</Button>
                      <Button className = "button-login-signup" color="primary" onClick={() => {history.push("/login")}}>Login</Button>
                    </ButtonGroup>
                  </div>
                  <div className="login-signup">
                    <Row>
                        <Col md="6">
                          <Card body className = "card">
                            <CardTitle tag="h2">Lost something?</CardTitle>
                            <CardText>Click here to search for your item.</CardText>
                            <Button className = "button-lost-found" color="danger" onClick={() => {history.push("/lost")}}>Lost</Button>
                          </Card>
                        </Col>
                        <Col md="6">
                          <Card body className = "card">
                            <CardTitle tag="h2">Found something?</CardTitle>
                            <CardText>Click here to return the found object.</CardText>
                            <Button className = "button-lost-found" color="success" onClick={() => {history.push("/found")}}>Found</Button>
                          </Card>
                        </Col>
                    </Row>
                  </div>
                </Container>
              <div className = "wrapper">
                  <div className = "inside-wrapper">
                <ItemCard img = "https://f1af951e8abcbc4c70b9-9997fa854afcb64e87870c0f4e867f1d.lmsin.net/1000007319314-1000007319313_01-750.jpg"
                name = "Bose headphones" 
                type = "electronics" 
                description = "Model: qc 35, black"
                />
                  </div>
              </div>

            </Jumbotron>
                    
            
        </div>
    )
}

export default HomeComponent