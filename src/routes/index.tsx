import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home/index';
import Register from '../pages/Register';
import LogIn from '../pages/LogIn';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/login" component={LogIn} />
    <Route path="/register" component={Register} />
  </Switch>
);

export default Routes;
