import { Link, useNavigate } from 'react-router-dom'
import { useUserStore } from '@stores'
import { path } from '@routes/testRoutes/path'

export function Component() {
  const logout = useUserStore((state) => state.logout)
  const navigate = useNavigate()

  function logoutAction() {
    logout()
    navigate(path.test1.link())
  }
  return (
    <div>
      <p>
        <i>Logged in!</i>
      </p>
      <Link to='/test/test1'>test</Link>
      <div>
        <button onClick={logoutAction}>Logout</button>
      </div>
    </div>
  )
}
