import { RouteObject } from 'react-router-dom'
import { ILoaderData } from '@pages/superadmin/hf/hfForm'
import { path } from './path'

// these are exluded from production
export const hfRoutes: RouteObject[] = [
  {
    path: path.hfList.route,
    lazy: () => import('@pages/superadmin/hf/hfList')
  },
  {
    path: path.hfView.route,
    lazy: () => import('@pages/superadmin/hf/hfForm'),
    loader: ({ params }): ILoaderData => {
      return { mode: 'view', id: Number(params.id) }
    }
  },
  {
    path: path.hfEdit.route,
    lazy: () => import('@pages/superadmin/hf/hfForm'),
    loader: ({ params }): ILoaderData => {
      return { mode: 'edit', id: Number(params.id) }
    }
  },
  {
    path: path.hfCreate.route,
    lazy: () => import('@pages/superadmin/hf/hfForm'),
    loader: ({ params }): ILoaderData => {
      return { mode: 'create' }
    }
  }
]
