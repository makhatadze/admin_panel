import React from 'react';
import {Route, Switch} from "react-router-dom";
import Client from "../modules/client/Client";
import NotFound from "../modules/client/vendor/not-found/NotFound";
import Login from "../modules/admin/pages/auth/Login";
import Register from "../modules/admin/pages/auth/Register";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../modules/admin/pages/dashboard/Dashboard";
import User from "../modules/admin/pages/user";
import GuestRoute from "./GuestRoute";
import Map from "../modules/admin/pages/map";
import NoMatch from "../modules/admin/pages/noMatch";




const Routes = () => {
    return (
        <>
            <Switch>
                <Route exact path='/' component={Client} />
                <GuestRoute exact path='/admin/login' component={Login} />
                <GuestRoute exact path='/admin/register' component={Register} />
                <Route path="/admin" render={() =>
                    <Dashboard>
                        <Switch>
                            <PrivateRoute path="/admin/user" component={User} />
                            <PrivateRoute path="/admin/map" component={Map} />
                            <PrivateRoute component={NoMatch} />
                        </Switch>
                    </Dashboard>
                } >
                </Route>
                <Route component={NotFound} />
            </Switch>
        </>
    )
}

export default Routes;
