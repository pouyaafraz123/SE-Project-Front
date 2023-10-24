import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './styles/main.css'
import './assets/icons/style.css'

import { QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { queryClient } from '@api/clients.ts'

import { router } from '@/routes'
import 'react-toastify/dist/ReactToastify.css'

async function setupMocks() {
  const { worker } = await import('./api/mock.ts')
  await worker.start({ onUnhandledRequest: 'warn' })
  return Promise.resolve()
}

function createRoot() {
  // React Query Devtools are excluded in production builds
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </React.StrictMode>
  )
}

if (import.meta.env.DEV && import.meta.env.MODE === 'mock') {
  setupMocks().then(createRoot) // https://github.com/mswjs/msw/issues/1653
} else {
  createRoot()
}
