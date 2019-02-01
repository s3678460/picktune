import React, { Component } from 'react';
import logo from "../../images/picktune-logo.png"
import "./FooterPage.css"

class FooterPage extends Component {
    render() {
        var date = new Date();
        return (
            <div>
                <footer className="mt-5 bg-dark px-5 pt-5 text-light">
                    <div className="container-fluid">
                        <div className="footer-top">
                            <div className="row">
                                <div className="col-lg-3 col-md-12 footer-brand pb-3">
                                    <div className="text-center float-left">
                                        <img width="50" height="50" src={logo} className="img-fluid" alt="Responsive image" />
                                        <h5 className="pt-1">Hear it. See it. Live it.</h5>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-12 footer-links pb-3">
                                    <h5>Useful Links</h5>
                                    <ul>
                                        <li>About us</li>
                                        <li>Join us</li>
                                    </ul>
                                </div>
                                <div className="col-lg-3 col-md-12 footer-support pb-3">
                                    <h5>Support</h5>
                                    <ul>
                                        <li>0123456789</li>
                                        <li>FAQ</li>
                                        <li>Contact US</li>
                                    </ul>
                                </div>
                                <div className="col-lg-3 col-md-12 footer-contact pb-3">
                                    <h5>Follow Us</h5>
                                    <a href="" className="pr-2"><i class="fab fa-facebook-square fa-3x" ></i></a>
                                    <a href="" className="pr-2"><i class="fab fa-instagram fa-3x" ></i></a>
                                    <a href="" className="pr-2"><i class="fab fa-google-plus-square fa-3x" ></i></a>
                                    <a href="" className="pr-2"><i class="fab fa-twitter-square fa-3x" ></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="copyright text-muted text-center pb-4 pt-5">Copyright &copy;PickTune {date.getFullYear()}</p>
                </footer>
            </div>
        );
    }
}

export default FooterPage;