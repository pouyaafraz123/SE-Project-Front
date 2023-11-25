import { RouteObject } from 'react-router-dom'
import type { ILoaderData } from '@pages/superadmin/hf/hfForm'
import { useUIStore } from '@stores'
import { path } from './path'

// these are exluded from production
export const hfRoutes: RouteObject[] = [
  {
    path: path.hfList.route,
    lazy: () => import('@pages/superadmin/hf/hfList'),
    loader: () => {
      useUIStore
        .getState()
        .setPage('pageTitle.hfManagement', [
          { name: 'pageTitle.main', link: '/' }
        ])
      return {}
    }
  },
  {
    path: path.hfView.route,
    lazy: () => import('@pages/superadmin/hf/hfForm'),
    loader: ({ params }): ILoaderData => {
      useUIStore.getState().setPage('pageTitle.hfView', [
        { name: 'pageTitle.main', link: '/' },
        {
          name: 'pageTitle.hfManagement',
          link: path.hfList.link()
        }
      ])
      return { mode: 'view', id: params.id! }
    }
  },
  {
    path: path.hfEdit.route,
    lazy: () => import('@pages/superadmin/hf/hfForm'),
    loader: ({ params }): ILoaderData => {
      useUIStore.getState().setPage('pageTitle.hfEdit', [
        { name: 'pageTitle.main', link: '/' },
        {
          name: 'pageTitle.hfManagement',
          link: path.hfList.link()
        }
      ])
      return { mode: 'edit', id: params.id! }
    }
  },
  {
    path: path.hfCreate.route,
    lazy: () => import('@pages/superadmin/hf/hfForm'),
    loader: ({ params }): ILoaderData => {
      useUIStore.getState().setPage('pageTitle.hfRegister', [
        { name: 'pageTitle.main', link: '/' },
        {
          name: 'pageTitle.hfManagement',
          link: path.hfList.link()
        }
      ])
      return { mode: 'create' }
    }
  }
]
