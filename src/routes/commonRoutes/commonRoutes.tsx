import { IExtendedRouteObject } from '@routes/types.ts'
import { UserTypes } from '@constants'
import { path } from './path.ts'

export const commonRoutes: IExtendedRouteObject[] = [
  {
    route: {
      path: path.landing.route,
      lazy: () => import('@pages/landing/landing')
    },
    permissions: [UserTypes.MANAGER, UserTypes.CUSTOMER, UserTypes.STAFF],
    isPublic: true
  },
  {
    route: {
      path: path.productView.route,
      lazy: () => import('@pages/productPage/productPage')
    },
    permissions: [UserTypes.MANAGER, UserTypes.CUSTOMER, UserTypes.STAFF],
    isPublic: true
  },
  {
    route: {
      path: path.productSearch.route,
      lazy: () => import('@pages/productSearchPage/productSearchPage')
    },
    permissions: [UserTypes.MANAGER, UserTypes.CUSTOMER, UserTypes.STAFF],
    isPublic: true
  },
  {
    route: {
      path: path.profile.route,
      lazy: () => import('@pages/panelPage/panelPage')
    },
    permissions: [UserTypes.MANAGER, UserTypes.CUSTOMER, UserTypes.STAFF]
  },
  {
    route: {
      path: path.cart.route,
      lazy: () => import('@pages/cartPage/cartPage')
    },
    permissions: [UserTypes.CUSTOMER]
  },
  {
    route: {
      path: path.address.route,
      lazy: () => import('@pages/addressPage/addressPage')
    },
    permissions: [UserTypes.CUSTOMER]
  }
]
