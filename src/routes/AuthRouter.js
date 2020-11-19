import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Login } from '../component/authUI/Login';
import { Register } from '../component/authUI/Register';

export const AuthRouter = () => (
  <div className="auth__main">
    <div className="auth__box-container">
      <Switch>
        <Route exact path="/auth/login" component={Login} />

        <Route exact path="/auth/register" component={Register} />

        <Redirect to="/auth/login" />
      </Switch>
    </div>
  </div>
);
