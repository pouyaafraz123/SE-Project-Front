import { RouteObject } from 'react-router-dom'
import { ModalPage } from '@pages/testPage/ModalPage.tsx'
import { AlertPage } from '@pages/testPage/AlertPage.tsx'
import { DatePickerPage } from '@pages/testPage/DatePickerPage.tsx'
import { NotifPage } from '@pages/testPage/NotifPage.tsx'
import { SwiperPage } from '@pages/testPage/SwiperPage.tsx'
import { protectedLoader, loginLoader } from '../authLoaders'
import { path } from './path'
import { TestDynamicPage } from '@/pages/testPage/TestDynamicPage'

// these are exluded from production
export const testRoutes: RouteObject[] = import.meta.env.PROD
  ? []
  : [
      {
        path: path.test1.route,
        // element: <TestPage />
        lazy: () => import('@pages/testPage/TestPage')
      },
      {
        path: path.test2.route,
        lazy: () => import('@pages/testPage/TestPage2'),
        loader: protectedLoader
        // async lazy() {
        //   import('@pages/TestPage') // preload other pages
        //   const { Component } = await import('@pages/TestPage2')
        //   return { Component }
        // }
      },
      {
        path: path['test-dynamic'].route,
        element: <TestDynamicPage />
      },
      {
        path: path.login.route,
        lazy: () => import('@pages/testPage/Login'),
        loader: loginLoader
      },
      {
        path: path.modal.route,
        element: <ModalPage />
      },
      {
        path: path.alert.route,
        element: <AlertPage />
      },
      {
        path: path['date-picker-page'].route,
        element: <DatePickerPage />
      },
      {
        path: path?.notif?.route,
        element: <NotifPage />
      },
      {
        path: path?.swiper?.route,
        element: <SwiperPage />
      }
    ]
