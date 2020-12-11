import React, { useState, useEffect, Fragment } from "react";

import {Link} from "react-router-dom";
import {Container, Row, Col, NavbarBrand, Navbar} from "reactstrap";
import { Nav, NavItem, NavLink, NavbarToggler, Collapse } from 'reactstrap';

import './header.css'
import { connect } from 'react-redux'
import { logout } from '../actions/authActions'

function Header(props) {

    const [isNavOpen, setisNavOpen] = useState(false);
    function toggleNav() {
        setisNavOpen( prevState =>  !prevState)
    }
    const guestLinks = 
    <Navbar dark expand="md">
            <NavbarToggler onClick={toggleNav} />
            <NavbarBrand className="mr-auto" href="/"><img src='./logo.png' height="30" width="41" alt='E-Lost and FOund' />E-Lost and Found</NavbarBrand>
            <Collapse isOpen={isNavOpen} navbar>
            <Nav navbar>
            <NavItem>
                <NavLink href = "/">Home</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/login" >Login</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/signup" >Signup</NavLink>
            </NavItem>
            </Nav>
            </Collapse>
    </Navbar>
    
    const loggedInLinks = 
    <Navbar dark expand="md">
        <NavbarToggler onClick={toggleNav} />
            <NavbarBrand className="mr-auto" href="/"><img src='./logo.png' height="30" width="41" alt='E-Lost and FOund' />E-Lost and Found</NavbarBrand>
            <Collapse isOpen={isNavOpen} navbar>
            <Nav navbar>
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
            </Nav>
            </Collapse>
    </Navbar>

    return (
        <header className = "header" style = {{width:"100%"}}>
            <Container className="">
                <Row>
                    <Nav>
                        { props.auth.isAuthenticated? loggedInLinks:guestLinks}
                    </Nav>
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