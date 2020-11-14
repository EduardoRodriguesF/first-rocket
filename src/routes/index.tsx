import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home/index';
import Register from '../pages/Register';
import LogIn from '../pages/LogIn';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/login" component={LogIn} />
    <Route path="/register" component={Register} />
    <Route path="/dashboard" component={Dashboard} />
  </Switch>
);

export default Routes;
