import { createBrowserRouter } from 'react-router-dom'

import { ErrorPage } from '@pages/errorPage'
import { AuthPage } from '@pages/auth'
import { commonRoutes } from '@routes/commonRoutes/commonRoutes.tsx'
import { IExtendedRouteObject } from '@routes/types.ts'
import { UserTypes } from '@constants'
import App from '../App'
import { loginLoader, protectedLoader } from './authLoaders'
import { path } from './path'
import { useUIStore } from '@/stores'

const routes: IExtendedRouteObject[] = [...commonRoutes]

function attachLoader() {
  for (const route of routes) {
    const _loader = route.route.loader
    // route.loader = (props) => {
    //   const auth = protectedLoader(props)
    //   if (auth !== null) return auth
    //   console.log('hello')
    //   return _loader ? _loader(props) : null
    // }
  }
  return routes
}

const withLayout: IExtendedRouteObject[] = [
  {
    route: {
      path: '/panel',
      element: <App />,
      loader: ({ request }) => {
        useUIStore.getState().setPage(request, 'pageTitle.main', [], 'index')
        return {}
      }
    },
    permissions: [UserTypes.MANAGER, UserTypes.STAFF, UserTypes.CUSTOMER]
  },
  ...routes
]
const getExtractRolesRoute = (
  role: UserTypes | undefined,
  routes: IExtendedRouteObject[]
) => {
  if (!role)
    return routes
      ?.filter((route) => route.isPublic)
      ?.map((route) => route.route)
  return routes
    ?.filter((route) => route.permissions?.includes(role))
    ?.map((route) => route.route)
}
export const getRouter = (role?: UserTypes) =>
  createBrowserRouter([
    ...getExtractRolesRoute(role, [...commonRoutes]),
    { path: '/auth', element: <AuthPage />, loader: loginLoader },
    {
      lazy: () => import('@pages/Layout'),
      children: getExtractRolesRoute(role, [...withLayout]),
      loader: protectedLoader,
      errorElement: <ErrorPage /> // fullscreen error page
      // if a child doesn't provide an errorElement, it will default to this one
    }
    /*{
    path: '/test/login', // TODO remove in production
    lazy: () => import('@pages/testPage/Login'),
    loader: loginLoader
  }*/
  ])

export { path }
