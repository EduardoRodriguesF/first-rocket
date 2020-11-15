/* eslint-disable react/jsx-curly-newline */
import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import Home from '../pages/Home/index';
import Register from '../pages/Register';

import { isAuthenticated } from '../services/auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      )
    }
  />
);

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/register" component={Register} />
    <PrivateRoute path="/dashboard" component={Dashboard} />
  </Switch>
);

export default Routes;
