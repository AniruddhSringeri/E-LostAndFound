import React, { useState, useEffect, Fragment } from "react";

import {Link} from "react-router-dom";
import {Container, Row, Col} from "reactstrap";
import { Nav, NavItem, NavLink } from 'reactstrap';

import './header.css'
import { connect } from 'react-redux'
import { logout } from '../actions/authActions'

function Header(props) {

    const guestLinks = 
        <Fragment>
            <NavItem>
                <NavLink href = "/">Home</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/login" >Login</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/signup" >Signup</NavLink>
            </NavItem>
        </Fragment>
    
    const loggedInLinks = 
        <Fragment>
            <NavItem>
                <span className="navbar-text">
                    <strong>{props.auth.user? `Welcome ${props.auth.user.name}` : null}</strong>
                </span>
            </NavItem><br/>
            <NavItem>
                <NavLink href = "/">Home</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/lost" >Lost</NavLink>
            </NavItem>
            <NavItem>
                    <NavLink href="/found">Found</NavLink>
            </NavItem>
            <NavItem>
                <NavLink onClick = {props.logout} href = "/" >Logout</NavLink>
            </NavItem>
        </Fragment>

    return (
        <header className = "header" style = {{width:"100%"}}>
            <Container className="themed-container" fluid={true} style = {{width:"100%"}}>
                <Row>
                    <Col xl = "3" lg = "2" style = {{paddingLeft:"2rem", paddingBottom:"1rem"}}>
                        <img src = "./logo.png" height = "100px" width = "100px" />
                    </Col>
                    <Col xl = "5">
                        <h1 align = "center" style = {{ paddingTop:"1.4rem", fontFamily:"sans-serif", fontSize: "4em"}}>E-Lost and Found Portal</h1>
                    </Col>

                    <Col xl = "4" align = "right" paddingTop = "1rem" >
                    <Nav style = {{fontSize: "1.5em", color:"white", paddingTop:"2rem", paddingLeft:"4rem"}}>
                        { props.auth.isAuthenticated? loggedInLinks:guestLinks}
                    </Nav>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, { logout })(Header);