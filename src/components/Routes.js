import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Login.js'
import Dashboard from './Dashboard.js';
import Wizard1 from './Wizard1.js';
import Wizard2 from './Wizard2.js';
import Wizard3 from './Wizard3.js';
import Wizard4 from './Wizard4.js';
import Wizard5 from './Wizard5.js';


export default (
    <Switch>

        <Route component={Login} exact path="/" />
        <Route component={Dashboard} path="/dashboard" />
        <Route component={Wizard1} path='/wizard/1' />
        <Route component={Wizard2} path='/wizard/2' />
        <Route component={Wizard3} path='/wizard/3' />
        <Route component={Wizard4} path='/wizard/4' />
        <Route component={Wizard5} path='/wizard/5' />
        

    </Switch>
)