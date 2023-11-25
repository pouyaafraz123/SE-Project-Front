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

// ! FOR DEV ONLY
const Authorization = import.meta.env.VITE_API_TOKEN && {
  Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`
}

// TODO set token from store/localstorage/cookie when login page available
export const axiosConfig: CreateAxiosDefaults = {
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: { ...Authorization }
}

export * from './toastConfig.ts'
