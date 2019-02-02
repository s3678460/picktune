import React, { Component } from 'react';
import { Route, Switch} from "react-router-dom"
import HomePage from "./components/HomePage"
import ErrorPage from "./components/ErrorPage"

class RouterURL extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route component={ErrorPage}/>
            </Switch>
        );
    }
}

export default RouterURL;