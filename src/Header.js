import React from "react"
import {Link} from "react-router-dom"
import {Container, Row, Col} from "reactstrap"
import { Nav, NavItem, NavLink } from 'reactstrap'

function Header() {
    return (
        <header className = "header">
            <Container className="themed-container" fluid={true}>
                <Row>
                    <Col xl = "3" lg = "2" style = {{paddingLeft:"2rem", paddingBottom:"1rem"}}>
                        <img src = "./logo.png" height = "100px" width = "100px" />
                    </Col>
                    <Col xl = "6">
                        <h1 align = "center" style = {{color:"white", paddingTop:"1.4rem", fontFamily:"sans-serif", fontSize: "3rem"}}>E-Lost and found portal</h1>
                    </Col>

                    <Col xl = "3" align = "right" paddingTop = "1rem" >
                    <Nav style = {{fontSize: "1.5em", color:"white", paddingTop:"2rem", paddingLeft:"4rem"}}>
                        <NavItem>
                        <NavLink href="/" style = {{color:"white"}}>Home</NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink href="/lost" style = {{color:"white"}}>Lost</NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink href="/found" style = {{color:"white"}}>Found</NavLink>
                        </NavItem>
                    </Nav>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default Header