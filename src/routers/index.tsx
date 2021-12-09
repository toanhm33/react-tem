import React from 'react';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import LayoutCustom from '../components/layouts';
import NotFoundPage from '../pages/NotFound/NotFoundPage';
import { renderRoutes } from 'react-router-config';
import routes from './routes';
import { createBrowserHistory } from 'history'
import { ConnectedRouter } from 'connected-react-router';

const history = createBrowserHistory()

const RouterComponent: React.FC = () => {
  return (
    <ConnectedRouter history={history}>
      {renderRoutes(routes as any)}
    </ConnectedRouter>
  );
};

export default RouterComponent;
