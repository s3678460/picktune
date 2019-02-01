import React, { Component } from 'react';

class FooterPage extends Component {
    render() {
        return (
            <div>
                <footer className="mt-5 bg-dark p-5 text-light">
                    <div className="footer-top">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 footer-brand">
                                <h3>Logo Website</h3>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, repellat corrupti non modi, sed exercitationem voluptates quia natus optio nemo voluptatem iste illo sit minus. Voluptates sapiente ex asperiores autem?</p>
                            </div>
                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li>About us</li>
                                    <li>Contact US</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </footer>
            </div>
        );
    }
}

export default FooterPage;