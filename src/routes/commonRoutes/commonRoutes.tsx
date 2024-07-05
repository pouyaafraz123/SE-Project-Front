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
  },
  {
    route: {
      path: path.userForm.route,
      lazy: () => import('@pages/userForm/userForm'),
      loader: protectedLoader
    },
    permissions: [UserTypes.STAFF, UserTypes.MANAGER]
  },
  {
    route: {
      path: path.categoryForm.route,
      lazy: () => import('@pages/categoryForm/categoryForm'),
      loader: protectedLoader
    },
    permissions: [UserTypes.STAFF, UserTypes.MANAGER]
  },
  {
    route: {
      path: path.brandForm.route,
      lazy: () => import('@pages/brandForm/brandForm'),
      loader: protectedLoader
    },
    permissions: [UserTypes.STAFF, UserTypes.MANAGER]
  },
  {
    route: {
      path: path.productForm.route,
      lazy: () => import('@pages/productForm/productForm'),
      loader: protectedLoader
    },
    permissions: [UserTypes.STAFF, UserTypes.MANAGER]
  },
  {
    route: {
      path: path.users.route,
      lazy: () => import('@pages/userTablePage/userTablePage'),
      loader: protectedLoader
    },
    permissions: [UserTypes.STAFF, UserTypes.MANAGER]
  },
  {
    route: {
      path: path.brands.route,
      lazy: () => import('@pages/brandPage/brandPage')
    },
    permissions: [UserTypes.MANAGER, UserTypes.CUSTOMER, UserTypes.STAFF],
    isPublic: true
  },
  {
    route: {
      path: path.contactUs.route,
      lazy: () => import('@pages/contactPage/contactForm')
    },
    permissions: [UserTypes.MANAGER, UserTypes.CUSTOMER, UserTypes.STAFF],
    isPublic: true
  },
  {
    route: {
      path: path.aboutUs.route,
      lazy: () => import('@pages/aboutPage/aboutPage')
    },
    permissions: [UserTypes.MANAGER, UserTypes.CUSTOMER, UserTypes.STAFF],
    isPublic: true
  }
]
