/** When your routing table is too long, you can split it into small modules* */
import { lazy } from 'react'
import Dashboard from 'src/components/layouts/Dashboard'

// Authentication routes
export const authRouters = {
  /**
   * path: string | string[]
   * renders <a href="/auth/company/*">
   * renders <a href="/auth/doctor/*">
   * Ref: https://reactrouter.com/web/api/Route/path-string-string
  */
  path: ['/company'],
  component: Dashboard,
  routes: [
    {
      path: '/admin/login',
      exact: true,
      component: lazy(() => import('src/views/auth/pages/LoginPage'))
    }
  ]
}
