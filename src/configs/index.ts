import type { QueryClientConfig } from '@tanstack/react-query'
import type { CreateAxiosDefaults } from 'axios'
import { retry } from '@api/errorHandler/reactQuery'

export const locales = ['en', 'fa']
export type localeType = 'en' | 'fa'
export const defaultLocale: localeType = 'fa'

export const reactQueryConfig: QueryClientConfig = {
  defaultOptions: {
    queries: { refetchOnWindowFocus: false, retry }
  }
}

// TODO set token from store/localstorage/cookie when login page available
export const axiosConfig: CreateAxiosDefaults = {
  baseURL: import.meta.env.VITE_API_BASE_URL
}

export * from './toastConfig.ts'
