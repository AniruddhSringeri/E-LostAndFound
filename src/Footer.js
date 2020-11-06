import React from "react"
import {Link} from "react-router-dom"
import {Container, Row, Col} from "reactstrap"
import { Nav, NavItem, NavLink } from 'reactstrap'
function Footer() {
    return (
        <footer className = "foot">
        <Container>
        <Row>

            <Col>
            <h4>Useful Links</h4>
            <ul>
              <li> <a href="#">Home</a></li>
              <li> <a href="#">About us</a></li>
              <li> <a href="#">Services</a></li>
              
            </ul>
            </Col>

            <Col>
                <h4>Our Services</h4>
                <ul>
                <li> <a href="#">Admission</a></li>
                <li> <a href="#">Campus Portal</a></li>
                <li> <a href="#">Management</a></li>
                <li> <a href="#">Department</a></li>
                <li> <a href="#">COE</a></li>
                </ul>
            </Col>

          <Col>
            <h4>Contact Us</h4>
            <p>
              B.M.S College of Engineering
              Basavanagudi, Bangaluru    
              <br></br>
              <strong>Phone :</strong> +91 **********<br></br>
              <strong>Email:</strong> xxxx@bmsce.ac.in
            </p>
            <a href="https://www.instagram.com/"><img src="./instagram.jpg" alt="Instagram>" width="25" height="25"/></a>
            <a href="https://www.twitter.com/"><img src="./twitter.png" alt="Twitter" width="25" height="25"/></a>
            <a href="https://www.fb.com/"><img src="./facebook.png" alt="Facebook" width="25" height="25"/></a>

        </Col>

         <Col>
            <h3>About E-Lost and Found</h3>
            <p>An initiative to uphold the Human values like honesty and Caring.</p>
           
              
            
            </Col>

          </Row>
      </Container>
        
        </footer>
    )
}

export default Footer