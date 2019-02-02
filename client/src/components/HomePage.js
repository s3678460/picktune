import React, { Component } from 'react';
import HeaderPage from "./layouts/HeaderPage"
import FooterPage from "./layouts/FooterPage"

class HomePage extends Component {
    render() {
        return (
            <div>
                <HeaderPage/>
                <div>
                    <h1>This is Home Page</h1>
                </div>
                <FooterPage/>
            </div>
        );
    }
}

export default HomePage;