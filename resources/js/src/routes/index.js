import React from 'react';
import {Route, Switch} from "react-router-dom";
import Admin from "../modules/admin/Admin";
import Client from "../modules/client/Client";
import NotFound from "../modules/client/vendor/not-found/NotFound";
import Login from "../modules/admin/pages/auth/Login";
import Register from "../modules/admin/pages/auth/Register";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../modules/admin/dashboard/Dashboard";




const Routes = () => {
    return (
        <>
            <Switch>
                <Route exact path='/' component={Client} />
                <Route exact path='/admin/login' component={Login} />
                <Route exact path='/admin/register' component={Register} />
                <PrivateRoute exact path='/admin' component={Dashboard} />
                <PrivateRoute exact path='/admin/dashboard' component={Dashboard} />
                <Route component={NotFound} />
            </Switch>
        </>
    )
}

export default Routes;
