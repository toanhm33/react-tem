import { Student } from './../models/students';
import { errorsRoutes } from './modules/errors';
import { lazy } from 'react';
import Dashboard from 'src/components/layouts/Dashboard';
import { authRouters } from './modules/auth';

export default [
  errorsRoutes,
  authRouters,
  {
    route: '*',
    component: Dashboard,
    routes: [
      {
        path: '/',
        exact: true,
        component: lazy(() => import('src/views/Homepage')),
      },
      {
        path: '/login',
        exact: true,
        component: lazy(() => import('src/features/auth/pages/LoginPage'))
      },
      {
        path: '/admin',
        exact: true,
        component: lazy(() => import('src/pages/HomePage'))
      },
      {
        path: '/dashboard/student',
        exact: true,
        component: lazy(() => import('src/views/Student'))
      },
      {
        path: '/dashboard',
        exact: true,
        component: lazy(() => import('src/views/Dashboard'))
      }
    ]
  },
];
