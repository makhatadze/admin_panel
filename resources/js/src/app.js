import React,{Component} from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import jwt_decode from 'jwt-decode';
import setAuthToken from "./utils/setAuthToken";

import store from './store';
import {Provider} from "react-redux";
import Routes from './routes'

class App extends Component{
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Route component={Routes} />
                </Router>
            </Provider>
        )
    }
}

export default App;