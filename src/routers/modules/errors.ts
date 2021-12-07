/** When your routing table is too long, you can split it into small modules* */
import React, { lazy } from 'react'
import { Redirect } from 'react-router-dom'
import ErrorLayout from '../../components/layouts/Error'
// Errors routes
export const errorsRoutes = {
  path: '/errors',
  component: ErrorLayout,
  routes: [
    {
      path: '/errors/error-401',
      exact: true,
      component: lazy(() => import('src/views/Errors/Error401'))
    },
    {
      path: '/errors/error-404',
      exact: true,
      component: lazy(() => import('src/views/Errors/Error404'))
    },
    {
      path: '/errors/error-500',
      exact: true,
      component: lazy(() => import('src/views/Errors/Error500'))
    },
    {
      path: '/errors/',
      // eslint-disable-next-line react/display-name
      // component: () => <Redirect to="/errors/error-404" />
    }
  ]
}
