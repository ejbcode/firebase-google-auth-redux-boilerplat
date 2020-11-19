import React, { useEffect, useState } from 'react';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { firebase } from '../firebase/firebaseConfig';

import { Main } from '../component/main/Main';
import { login } from '../redux/actions/authAction';
import { PublicRoute } from './PublicRoute';
import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';

export const AppRoute = () => {
  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }

      setChecking(false);
    });
  }, [dispatch, setChecking, setIsLoggedIn]);

  if (checking) {
    return <h1>Wait...</h1>;
  }

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <PublicRoute
            path="/auth"
            component={AuthRouter}
            isAuthenticated={isLoggedIn}
          />

          <PrivateRoute
            exact
            path="/"
            component={Main}
            isAuthenticated={isLoggedIn}
          />
          <Redirect to="/auth/login" />
        </Switch>
      </BrowserRouter>
    </div>
  );
};
