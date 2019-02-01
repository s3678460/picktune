import React, { Component } from 'react';
import logo from "../../images/picktune-logo.png"

class FooterPage extends Component {
    render() {
        return (
            <div>
                <footer className="mt-5 bg-dark p-5 text-light">
                    <div className="container">
                        <div className="footer-top">
                            <div className="row">
                                <div className="col-lg-3 col-md-6 footer-brand">
                                    <div className="text-center">
                                        <img width="50" height="50" src={logo} className="img-fluid" alt="Responsive image" />
                                        <h5 className="pt-1">Hear it. See it. Live it.</h5>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 footer-links">
                                    <h5>Useful Links</h5>
                                    <ul>
                                        <li>About us</li>
                                        <li>Join us</li>
                                        <li>Contact US</li>
                                    </ul>
                                </div>
                                <div className="col-lg-3 col-md-6 footer-contact">
                                    <h5>Follow Us</h5>
                                    <a href=""><i class="fab fa-facebook-square fa-3x" ></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default FooterPage;