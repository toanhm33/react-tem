/** When your routing table is too long, you can split it into small modules* */
import AuthLayout from 'src/components/layouts/Auth'
import { lazy } from 'react'

// Authentication routes
export const authRouters = {
  /**
   * path: string | string[]
   * renders <a href="/auth/company/*">
   * renders <a href="/auth/doctor/*">
   * Ref: https://reactrouter.com/web/api/Route/path-string-string
  */
  path: ['/company'],
  component: AuthLayout,
  routes: [
    {
      path: '/admin/login',
      exact: true,
      component: lazy(() => import('src/features/auth/pages/LoginPage'))
    }
  ]
}
