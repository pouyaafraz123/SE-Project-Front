import { createBrowserRouter, RouteObject } from 'react-router-dom'

import { ErrorPage } from '@pages/errorPage/index'
import { AuthPage } from '@pages/auth'
import App from '../App'

import { testRoutes } from './testRoutes/testRoutes'
import { protectedLoader } from './authLoaders'
import { path } from './path'
import { useUIStore } from '@/stores'

const routes: RouteObject[] = [...testRoutes]

function attachLoader() {
  for (const route of routes) {
    const _loader = route.loader
    // route.loader = (props) => {
    //   const auth = protectedLoader(props)
    //   if (auth !== null) return auth
    //   console.log('hello')
    //   return _loader ? _loader(props) : null
    // }
  }
  return routes
}

const withLayout: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    loader: () => {
      useUIStore.getState().setPage('pageTitle.main', [])
      return {}
    }
  },
  ...testRoutes,
  ...routes
]

export const router = createBrowserRouter([
  {
    lazy: () => import('@pages/Layout'),
    children: [...withLayout],
    loader: protectedLoader,
    errorElement: <ErrorPage /> // fullscreen error page
    // if a child doesn't provide an errorElement, it will default to this one
  },
  { path: '/auth', element: <AuthPage /> }
  /*{
    path: '/test/login', // TODO remove in production
    lazy: () => import('@pages/testPage/Login'),
    loader: loginLoader
  }*/
])

export { path }
