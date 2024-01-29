import { IExtendedRouteObject } from '@routes/types.ts'
import { UserTypes } from '@constants'
import { protectedLoader } from '@routes/authLoaders.ts'
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
      lazy: () => import('@pages/panelPage/panelPage'),
      loader: protectedLoader
    },
    permissions: [UserTypes.MANAGER, UserTypes.CUSTOMER, UserTypes.STAFF],
    isPublic: true
  },
  {
    route: {
      path: path.cart.route,
      lazy: () => import('@pages/cartPage/cartPage'),
      loader: protectedLoader
    },
    permissions: [UserTypes.CUSTOMER],
    isPublic: true
  },
  {
    route: {
      path: path.address.route,
      lazy: () => import('@pages/addressPage/addressPage'),
      loader: protectedLoader
    },
    permissions: [UserTypes.CUSTOMER],
    isPublic: true
  },
  {
    route: {
      path: path.categoryTable.route,
      lazy: () => import('@pages/categoryPage/categoryPage')
    },
    permissions: [UserTypes.MANAGER, UserTypes.CUSTOMER, UserTypes.STAFF],
    isPublic: true
  },
  {
    route: {
      path: path.profileEdit.route,
      lazy: () => import('@pages/profile/profileEditPage'),
      loader: protectedLoader
    },
    permissions: [UserTypes.CUSTOMER, UserTypes.STAFF, UserTypes.MANAGER],
    isPublic: true
  }
]
