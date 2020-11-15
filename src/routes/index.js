/* eslint-disable react/jsx-curly-newline */
import React from 'react';

import { Switch, Route, Redirect, RouteProps } from 'react-router-dom';

import Home from '../pages/Home/index';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import Mentorias from '../pages/Mentorias'

import { isAuthenticated } from '../services/auth';

const PrivateRoute = ({
  component: Component,
  ...rest
}) => (
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

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/register" component={Register} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/mentorias" component={Mentorias} />
  </Switch>
);

export default Routes;
