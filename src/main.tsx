import React, { Suspense, useEffect } from 'react'
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
import { TOAST_CONTAINER_PROPS } from '@configs'
import { ToastContainer } from 'react-toastify'
import { useUserStore } from '@stores'

async function setupMocks() {
  const { worker } = await import('./api/mock.ts')
  await worker.start({ onUnhandledRequest: 'bypass' })
  return Promise.resolve()
}

export function Root() {
  document.documentElement.dir = 'rtl'

  const token = useUserStore((state) => state.token)
  useEffect(() => {
    if (token)
      axiosClient.defaults.headers.common['Authorization'] = `Bearer ${token}`
    else delete axiosClient.defaults.headers.common['Authorization']
  }, [token])

  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<div>در حال لود ...</div>}>
          <AppRouter />
          <AxiosHandler />
          <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
          <SelectBoxContainer />
          <ToastContainer {...TOAST_CONTAINER_PROPS} rtl={true} />
        </Suspense>
      </QueryClientProvider>
    </React.StrictMode>
  )
}

function AxiosHandler() {
  const errorHandler = useErrorHandler()
  useEffect(() => {
    axiosClient.interceptors.response.use(undefined, errorHandler)
  }, [errorHandler])

  return <></>
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
