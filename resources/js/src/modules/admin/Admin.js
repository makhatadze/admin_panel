import React, {Component} from 'react';
import translate from "../../shared/i18n/translate";
import {Route} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";



class Admin extends Component {
    render() {
        return (
            <>
                <ToastContainer />
                <Route exact path="/admin/login" component={Login} />
                <Route exact path="/admin/register" component={Register} />
            </>
        )
    }
}

export default Admin;
