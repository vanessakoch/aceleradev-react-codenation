import React from 'react';
import PrivateRoute from '../containers/PrivateRoute/PrivateRoute';
import LoginRoute from './LoginRoute';
import AuthorizeRoute from './AuthorizeRoute';
import DashboardRoute from './DashboardRoute';

import { Switch, Route } from 'react-router-dom';

const Routes = () => {

  return (
    <Switch>
      <Route exact path="/" component={ LoginRoute } />
      <Route exact path="/authorize" component={ AuthorizeRoute } />
      <PrivateRoute path="/dashboard" component={ DashboardRoute } />
    </Switch>
  )

};

export default Routes;