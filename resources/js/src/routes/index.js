import React from 'react';
import {Route, Switch} from "react-router-dom";
import Admin from "../modules/admin/Admin";
import Client from "../modules/client/Client";
import NotFound from "../modules/client/vendor/not-found/NotFound";
import Login from "../modules/admin/pages/auth/Login";




const Routes = () => {
    return (
        <>
            <Switch>
                <Route exact path='/admin' component={Admin} />
                <Route exact path='/' component={Client} />
                <Route exact path='/admin/login' component={Login} />
                <Route exact path='/admin/login' component={Login} />
                <Route component={NotFound} />
            </Switch>
        </>
    )
}

export default Routes;
