import { LoaderFunctionArgs, redirect } from 'react-router-dom'
import { userAccess } from '@constants'
import { useUserStore } from '@stores'
import { matchPath } from 'react-router-dom'

/**
If the user is not logged in we redirect
them to `/login` with a `from` parameter that allows login to redirect back
to this page upon successful authentication
 */
export function protectedLoader({ request }: LoaderFunctionArgs) {
  const state = useUserStore.getState() // we don't need reactive state here
  const role = useUserStore.getState().role

  const url = new URL(request.url).pathname

  // if (!userAccess[role].some((route) => matchPath({ path: route }, url))) {
  //   throw new Response('Not Found', { status: 403 })
  // }

  if (!state.token) {
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

  if (state.token) {
    const params = new URL(request.url).searchParams
    return redirect(params.get('from') || '/')
  }
  return null
}

useUserStore.subscribe(
  (state) => state.role,
  () => window.location.reload()
)
