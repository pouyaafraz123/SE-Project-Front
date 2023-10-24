import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import HttpApi from 'i18next-http-backend'
import { useUIStore } from '@stores'
import { defaultLocale } from '@configs'

i18next
  .use(HttpApi)
  .use(initReactI18next)
  .init({
    lng: useUIStore.getState().locale,
    ns: ['common', 'zod'],
    fallbackLng: defaultLocale,
    interpolation: {
      escapeValue: false
    },
    defaultNS: 'common'
  })

useUIStore.subscribe(
  (state) => state.locale,
  (locale) => {
    i18next.changeLanguage(locale)
  }
)
