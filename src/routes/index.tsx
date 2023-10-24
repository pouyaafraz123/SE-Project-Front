import { createBrowserRouter, RouteObject } from 'react-router-dom'

import { Layout } from '@pages/Layout'
import { ErrorPage } from '@pages/errorPage/index'
import App from '../App'

import { testRoutes } from './testRoutes/testRoutes'
import { hfRoutes } from './hf/hfRoutes'

const withLayout: RouteObject[] = [
  {
    path: '/',
    element: <App />
  },
  ...testRoutes,
  ...hfRoutes
]

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [...withLayout],
    errorElement: <ErrorPage /> // fullscreen error page
    // if a child doesn't provide an errorElement, it will default to this one
  }
])
