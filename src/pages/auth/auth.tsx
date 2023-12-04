import { usePostLogin } from '@api/login'
import { usePostSignup } from '@api/signup'
import { AuthContainer } from '@/templates/auth'

export function AuthPage() {
  const { mutate: login, isLoading: isLoginLoading } = usePostLogin()
  const { mutate: signup, isLoading: isSignupLoading } = usePostSignup()

  return (
    <AuthContainer
      onSignup={(data) => signup(data)}
      onLogin={(data) => login(data)}
      isLoading={isLoginLoading || isSignupLoading}
    />
  )
}
