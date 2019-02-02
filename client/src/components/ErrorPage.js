import React, { Component } from 'react';
import HeaderPage from "./layouts/HeaderPage"
import FooterPage from "./layouts/FooterPage"
import { Redirect } from "react-router-dom"

class ErrorPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timeOut: 5,
            isRedirect: false
        }
    }
    componentDidMount() {
        this.interValTimeOut = setInterval(() => {
            if (this.state.timeOut === 0) {
                this.setState({
                    isRedirect: true
                })
            }
            else {
                this.setState({
                    timeOut: this.state.timeOut - 1
                })
            }
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.interValTimeOut)
    }
    render() {
        if (this.state.isRedirect) {
            return <Redirect to="/" />
        }
        return (
            <div>
                <HeaderPage />
                <div className="container text-center p-5">
                    <i class="far fa-frown fa-10x pb-2"></i>
                    <h5> Page is not found. Redirecting to Home Page in {this.state.timeOut}s</h5>
                </div>
                <FooterPage />
            </div>
        );
    }
}

export default ErrorPage;