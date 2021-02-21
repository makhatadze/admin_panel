import React, {Component, useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import jwt_decode from 'jwt-decode';
import setAuthToken from "./utils/setAuthToken";
import i18n from './shared/i18n'

import store from './store';
import {Provider} from "react-redux";
import Routes from './routes'
import { withTranslation } from 'react-i18next';

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
                <Router>
                    <Route component={Routes}/>
                </Router>
            </Provider>
        )
    }
}

export default withTranslation()(App)
