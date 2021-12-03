import { errorsRoutes } from './modules/errors';
import { lazy } from 'react';
import LayoutCustom from 'src/components/layout';


export default [
  errorsRoutes,
  {
    route: '*',
    component: LayoutCustom,
    routes: [
      {
        path: '/',
        exact: true,
        component: lazy(() => import('../pages/HomePage')),
      }
    ],
  },
];
