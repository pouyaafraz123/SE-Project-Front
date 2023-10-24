import { LoaderFunctionArgs, redirect } from 'react-router-dom'

import { useUserStore } from '@stores'

/**
If the user is not logged in we redirect
them to `/login` with a `from` parameter that allows login to redirect back
to this page upon successful authentication
 */
export function protectedLoader({ request }: LoaderFunctionArgs) {
  const state = useUserStore.getState() // we don't need reactive state here

  if (!state.isAuthenticated) {
    const params = new URLSearchParams()
    params.set('from', new URL(request.url).pathname)
    return redirect('/test/login?' + params.toString())
  }
  return null
}

/**
if user is already logged in, redirect to `from` or `/`
 */
export function loginLoader({ request }: LoaderFunctionArgs) {
  const state = useUserStore.getState() // we don't need reactive state here

  if (state.isAuthenticated) {
    const params = new URL(request.url).searchParams
    return redirect(params.get('from') || '/')
  }
  return null
}
