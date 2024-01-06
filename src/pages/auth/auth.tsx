import { usePostLogin } from '@api/login'
import { usePostSignup } from '@api/signup'
import { useUserStore } from '@stores'
import { AuthContainer } from '@/templates/auth'

export function AuthPage() {
  const { mutate: login, isLoading: isLoginLoading } = usePostLogin()
  const { mutate: signup, isLoading: isSignupLoading } = usePostSignup()

  const setUser = useUserStore((state) => state.login)

  return (
    <AuthContainer
      onSignup={(data) =>
        signup(data, {
          onSuccess: (res) => {
            setUser(res?.data?.token, data?.userType)
          }
        })
      }
      onLogin={(data) =>
        login(data, {
          onSuccess: (res) => {
            console.log(res)
            setUser(res?.data?.token, data?.userType)
          }
        })
      }
      isLoading={isLoginLoading || isSignupLoading}
    />
  )
}
