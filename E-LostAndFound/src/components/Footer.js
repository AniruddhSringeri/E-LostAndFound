import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css'
function Footer(props) {
    return(
    <div className="footer">
        <hr />
        <div className="container">
            <div className="row justify-content-center">             
                {/* {<div className="col-4 offset-1 col-sm-2">
                    <h5>Links</h5>
                    <ul className="list-unstyled">
                    <li><Link to='/'>Home</Link></li>
                        <li><Link to='/login'>Login</Link></li>
                        <li><Link to='/signup'>Sign Up</Link></li>
                    </ul>
                </div>} */}
                <div className="footer-info">
                    <h5>Our Address</h5>
                    <address>
		              BMS College of Engineering<br />
		              Basavanagudi<br />
		              Bangalore<br />
		              <i className="fa fa-phone fa-lg"></i>:  1234 5678<br />
		              <i className="fa fa-fax fa-lg"></i>:  8765 4321<br />
		              <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:abc@gmail.com">
                         abc@gmail.com</a>
                    </address>
                </div>
                {/* {<div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                        <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a>
                    </div>
                </div>} */}
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>© Copyright 2020 E-Lost and Found</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;