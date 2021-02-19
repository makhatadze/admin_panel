import React from 'react';
import {Route, Switch} from "react-router-dom";
import Admin from "../modules/admin/Admin";
import Client from "../modules/client/Client";
import NotFound from "../modules/client/vendor/not-found/NotFound";




const Routes = () => {
    return (
        <>
            <Switch>
                <Route exact path='/admin' component={Admin} />
                <Route exact path='/' component={Client} />
                <Route component={NotFound} />
            </Switch>
        </>
    )
}

export default Routes;