import React, {Component, useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import jwt_decode from 'jwt-decode';
import setAuthToken from "./utils/setAuthToken";
import i18n from './shared/i18n'

import store from './store';
import {Provider} from "react-redux";
import { withTranslation } from 'react-i18next';
import Admin from "./modules/admin/Admin";
import {logoutUser, setCurrentUser} from "./actions/authActions";


// Check for token
if (localStorage.jwtToken) {
    // Set auth token header auth
    setAuthToken(localStorage.jwtToken);
    // Decode token and get user info and exp
    const decoded = jwt_decode(localStorage.jwtToken);
    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded));
    // Check for expired token
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
        // Logout user
        store.dispatch(logoutUser());
        // Clear current Profile
        store.dispatch(clearCurrentProfile());
        // Redirect to login
        console.log(123)
        window.location.href = '/login';
    }
}

class App extends Component {
    constructor(props) {
        super(props);
    }

    changeLanguage(language) {
        localStorage.setItem('i18nextLng', language);
        i18n.changeLanguage(language);
    }
    render() {
        const { t } = this.props;

        return (
            <Provider store={store}>
                <button onClick={ () => this.changeLanguage('en')}>ENGLISH</button>
                <button onClick={ () => this.changeLanguage('de')}>GERMAN</button>
                <button onClick={ () => this.changeLanguage('fr')}>FRENCH</button>
                <Admin />
            </Provider>
        )
    }
}

export default withTranslation()(App)
