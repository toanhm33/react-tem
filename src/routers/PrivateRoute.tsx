import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isLogin } from '../helper/localStorge.helper';
import { TConfigRouter } from '../types/RouterConfigModel';
export const PrivateRoute: React.FC<TConfigRouter> = ({
  component: Component,
  layout: Layout,
  path,
  ...rest
}) => {
  return !isLogin() ? (
    <Redirect to="/login" />
  ) : (
    <Route
      {...rest}
      render={() => (
        <Layout>
          <Component />
        </Layout>
      )}
    />
  );
};
export default PrivateRoute;
