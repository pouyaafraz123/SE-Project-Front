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
import { RouterProvider } from 'react-router-dom'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { axiosClient, queryClient } from '@api/clients.ts'

import { router } from '@/routes'
import 'react-toastify/dist/ReactToastify.css'

async function setupMocks() {
  const { worker } = await import('./api/mock.ts')
  await worker.start({ onUnhandledRequest: 'bypass' })
  return Promise.resolve()
}

function Root() {
  const errorHandler = useErrorHandler()
  axiosClient.interceptors.response.use(undefined, errorHandler)
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
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
