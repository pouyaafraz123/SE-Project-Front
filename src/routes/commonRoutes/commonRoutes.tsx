import { IExtendedRouteObject } from '@routes/types.ts'
import { UserTypes } from '@constants'
import { path } from './path.ts'

export const commonRoutes: IExtendedRouteObject[] = [
  {
    route: {
      path: path.landing.route,
      lazy: () => import('@pages/landing/landing')
    },
    permissions: [UserTypes.MANAGER, UserTypes.CUSTOMER, UserTypes.STAFF]
  }
]
