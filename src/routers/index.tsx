import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import LayoutCustom from '../components/layout';
import NotFoundPage from '../pages/NotFound/NotFoundPage';
import { privateRoutes, publicRoutes } from './config';
import PrivateRoute from './PrivateRoute';
import PubicRoute from './PublicRoute';
const RouterComponent: React.FC = () => {
  return (
    <Switch>
      {publicRoutes.map((route) => {
        return <PubicRoute key={route.path} {...route} />;
      })}
      {privateRoutes.map((route) => {
        return <PrivateRoute key={route.path} {...route} />;
      })}
      <Route
        path="*"
        render={() => (
          <LayoutCustom>
            <NotFoundPage />
          </LayoutCustom>
        )}
      />
    </Switch>
  );
};

export default RouterComponent;
