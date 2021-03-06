import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'antd/dist/antd.css'
import 'antd/dist/antd.js'
import Routes from "../../routes";
import './Admin.scss';


class Admin extends Component {

    render() {
        return (
            <>
                <Router>
                    <Route component={Routes}/>
                </Router>
            </>
        )
    }
}

export default Admin;
