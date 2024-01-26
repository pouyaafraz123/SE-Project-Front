import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './styles/main.css'
import './assets/icons/style.css'
import './assets/flags/flag-icons-min.css'
import './assets/flags/flag-icons.css'
import '@styles/global.scss'
import './i18n/i18n'
import { useErrorHandler } from '@api/errorHandler/apiErrorHandler.tsx'

import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { axiosClient, queryClient } from '@api/clients.ts'

import 'react-toastify/dist/ReactToastify.css'
import { AppRouter } from '@routes/appRouter.tsx'
import { SelectBoxContainer } from '@components/molecules/selectBox'

async function setupMocks() {
  const { worker } = await import('./api/mock.ts')
  await worker.start({ onUnhandledRequest: 'bypass' })
  return Promise.resolve()
}

export function Root() {
  document.documentElement.dir = 'rtl'
  const errorHandler = useErrorHandler()
  axiosClient.interceptors.response.use(undefined, errorHandler)
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <AppRouter />
        <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
        <SelectBoxContainer />
      </QueryClientProvider>
    </React.StrictMode>
  )
}

function createRoot() {
  // React Query Devtools are excluded in production builds
  ReactDOM.createRoot(document.getElementById('root')!).render(<Root />)
}

if (import.meta.env.DEV && import.meta.env.MODE === 'mock') {
  setupMocks().then(createRoot) // https://github.com/mswjs/msw/issues/1653
} else {
  createRoot()
}
