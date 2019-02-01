import React, { Component } from 'react';
import logo from "../../images/picktune-logo.png"

class HeaderPage extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <a className="navbar-brand text-light">
                        <img src={logo} width="30" height="30" class="d-inline-block align-top" alt="picktune-logo" /> PickTune
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link">Home<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Music</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Story</a>
                            </li>
                            {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown
        </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <div className="dropdown-divider" />
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li> */}
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-success my-2 my-sm-0 mr-sm-2" type="submit">Register</button>
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button>
                        </form>
                    </div>
                </nav>
            </div>
        );
    }
}

export default HeaderPage;