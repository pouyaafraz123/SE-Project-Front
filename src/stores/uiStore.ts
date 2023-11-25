import { create } from 'zustand'
import { devtools, persist, subscribeWithSelector } from 'zustand/middleware'

import { defaultLocale, localeType } from '@configs'
import {
  ALERT_DEFAULT_PROPS,
  TAlertProps,
  TShowAlertParams
} from '@components/molecules/alert'
import { ParseKeys } from 'i18next'
import { ThemeMode } from '@/theme'
import { IBreadcrumbs } from '@/interfaces'

interface UIState {
  locale: localeType
  changeLocale: (value: localeType) => void
  theme: ThemeMode
  setTheme: (value: ThemeMode) => void
  alertProps: TAlertProps
  showAlert: (props: TAlertProps) => void
  pageTitle: ParseKeys<'common'>
  breadcrumbs: IBreadcrumbs
  setPage: (pageTitle: ParseKeys<'common'>, breadcrumps?: IBreadcrumbs) => void
}

// partialized items are stored in localStorge
export const useUIStore = create<UIState>()(
  subscribeWithSelector(
    persist(
      devtools(
        (set) => ({
          locale: defaultLocale,
          changeLocale: (value) => set({ locale: value }),
          theme: ThemeMode.BONDI_LIGHT,
          setTheme: (value) => set({ theme: value }),
          alertProps: ALERT_DEFAULT_PROPS,
          showAlert: (value) => set({ alertProps: value }),
          pageTitle: 'pageTitle.usersManagement',
          breadcrumbs: [],
          setPage: (pageTitle, breadcrumps) => {
            set({ pageTitle })
            breadcrumps && set({ breadcrumbs: breadcrumps })
          }
        }),
        {
          enabled: !import.meta.env.PROD,
          name: 'uiStore'
        }
      ),
      {
        name: 'uiState',
        partialize: (state) => ({
          locale: state.locale,
          theme: state.theme
        })
      }
    )
  )
)

/**
 * Shows a generic alert dialog.
 * @param {TShowAlertParams} alertProps - The properties of the alert.
 */
export const showAlert = (alertProps: TShowAlertParams) => {
  useUIStore.setState(() => ({
    alertProps: {
      ...alertProps,
      open: true
    }
  }))
}

/**
 * Closes the currently open alert dialog.
 */
export const closeAlert = () => {
  useUIStore.setState(() => ({ alertProps: ALERT_DEFAULT_PROPS }))
}
