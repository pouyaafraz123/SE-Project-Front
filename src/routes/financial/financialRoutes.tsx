import { RouteObject } from 'react-router-dom'
import { useUIStore } from '@stores'
import type { ILoaderData } from '@pages/superadmin/financial/ruleForm'
import { path } from './path'

// these are exluded from production
export const financialRoutes: RouteObject[] = [
  {
    path: path.list.route,
    lazy: () => import('@pages/superadmin/financial/ruleList'),
    loader: () => {
      useUIStore
        .getState()
        .setPage('pageTitle.financialRules', [
          { name: 'pageTitle.main', link: '/' }
        ])
      return {}
    }
  },
  {
    path: path.create.route,
    lazy: () => import('@/pages/superadmin/financial/ruleForm'),
    loader: ({ params }): ILoaderData => {
      useUIStore.getState().setPage('pageTitle.defineFinancialRule', [
        { name: 'pageTitle.main', link: '/' },
        { name: 'pageTitle.financialRules', link: path.list.link() }
      ])
      return { mode: 'create' }
    }
  },
  {
    path: path.edit.route,
    lazy: () => import('@/pages/superadmin/financial/ruleForm'),
    loader: ({ params }): ILoaderData => {
      useUIStore.getState().setPage('pageTitle.defineFinancialRule', [
        { name: 'pageTitle.main', link: '/' },
        { name: 'pageTitle.financialRules', link: path.list.link() }
      ])
      return { mode: 'edit', id: params.id! }
    }
  },
  {
    path: path.view.route,
    lazy: () => import('@/pages/superadmin/financial/ruleForm'),
    loader: ({ params }): ILoaderData => {
      useUIStore.getState().setPage('pageTitle.defineFinancialRule', [
        { name: 'pageTitle.main', link: '/' },
        { name: 'pageTitle.financialRules', link: path.list.link() }
      ])
      return { mode: 'view', id: params.id! }
    }
  },
  {
    path: path.wallet.route,
    lazy: () => import('@pages/superadmin/financial/wallet'),
    loader: () => {
      useUIStore
        .getState()
        .setPage('pageTitle.patientWallet', [
          { name: 'pageTitle.main', link: '/' }
        ])
      return {}
    }
  }
]
