import { useSearchParams, useNavigate } from 'react-router-dom'

import { useUserStore } from '@stores'

export function Component() {
  const login = useUserStore((state) => state.login)
  const [params, _] = useSearchParams()
  const navigate = useNavigate()

  const from = params.get('from') || '/'

  function loginAction() {
    login()
    navigate(from)
  }
  return (
    <div>
      <p>
        <i>Hello World!</i>
      </p>
      <button onClick={loginAction}>Login</button>
    </div>
  )
}
