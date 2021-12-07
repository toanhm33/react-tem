import { errorsRoutes } from './modules/errors';
import { lazy } from 'react';
import Dashboard from 'src/components/layouts/Dashboard';

export default [
  errorsRoutes,
  {
    route: '*',
    component: Dashboard,
    routes: [
      {
        path: '/',
        exact: true,
        component: lazy(() => import('../pages/HomePage')),
      }
    ],
  },
];
