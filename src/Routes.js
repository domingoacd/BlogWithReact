import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './App';
import Default from '../src/components/default/Default';
import Logged from '../src/components/logged/Logged';
import Register from './components/register/Register';
import Page404 from './components/page404/Page404';

const AppRoutes = () => 
    <App>
        <Switch>
            <Route path='/default' component={ Default }/>           
            <Route path='/logged' component={ Logged }/>           
            <Route path='/register' component={ Register }/>           
            <Route path='/' component={ App }/>           
            <Route component={ Page404 }/>           
        </Switch>
    </App>

export default AppRoutes;