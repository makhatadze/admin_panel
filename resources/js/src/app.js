import React,{Component, useState} from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import jwt_decode from 'jwt-decode';
import setAuthToken from "./utils/setAuthToken";
import { I18nProvider, LOCALES } from "./shared/i18n";

import translate from "./shared/i18n/translate";

import store from './store';
import {Provider} from "react-redux";
import Routes from './routes'

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            locale: LOCALES.ENGLISH
        };
    }
    render() {
        return (
            <Provider store={store}>
                <I18nProvider locale={this.state.locale}>
                    <button onClick={() => this.setState({ locale: LOCALES.ENGLISH })}>ENGLISH</button>
                    <button onClick={() => this.setState({ locale: LOCALES.GERMAN })}>GERMAN</button>
                    <button onClick={() => this.setState({ locale: LOCALES.FRENCH })}>FRENCH</button>
                    <Router>
                        <Route component={Routes} />
                    </Router>

                </I18nProvider>
            </Provider>
        )
    }
}

export default App;
