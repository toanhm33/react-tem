import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { TConfigRouter } from '../types/RouterConfigModel';
import { isLogin } from '../helper/localStorge.helper';
export const PubicRoute: React.FC<TConfigRouter> = ({
  component: Component,
  layout: Layout,
  ...rest
}) => {
  return isLogin() ? (
    <Redirect to="/" />
  ) : (
    <Route
      {...rest}
      render={() => {
        return <Component />;
      }}
    />
  );
};
export default PubicRoute;
