import clsx from 'clsx'
import { Box } from '@components/atoms/box'
import { useState } from 'react'
import classes from './styles.module.scss'
import { Login } from '@/templates/auth/login.tsx'
import { LoginSide } from '@/templates/auth/loginSide.tsx'
import { SignupSide } from '@/templates/auth/signupSide.tsx'
import { Signup } from '@/templates/auth/signup.tsx'
import { IAuthTemplateProps } from '@/templates/auth/types.ts'

export function AuthContainer({
  onLogin,
  onSignup,
  isLoading
}: IAuthTemplateProps) {
  const [isLogin, setIsLogin] = useState(true)
  const [isAnimStart, setIsAnimStart] = useState(false)
  const [isScale, setIsScale] = useState(false)

  const onTypeChange = () => {
    setTimeout(() => setIsLogin((prevState) => !prevState), 200)
    setIsScale(true)
    setTimeout(() => setIsScale(false), 800)
    setIsAnimStart((prevState) => !prevState)
  }

  return (
    <div className={clsx(classes.authContainer)}>
      <Box
        className={clsx(classes.authContainer__inside)}
        radius={'lg'}
        px={'0'}
        py={'0'}
        shadow
      >
        <div
          className={clsx(
            classes.authContainer__side,
            !isAnimStart && classes.authContainer__sideLeft,
            isScale && classes.authContainer__sideScale
          )}
        >
          <div>
            {isLogin && <LoginSide onChange={onTypeChange} />}
            {!isLogin && <SignupSide onChange={onTypeChange} />}
          </div>
        </div>
        <div
          className={clsx(
            classes.authContainer__formContainer,
            !isAnimStart && classes.authContainer__formContainerLeft
          )}
        >
          {isLogin && <Login onLogin={onLogin} isLoading={isLoading} />}
          {!isLogin && <Signup onSignup={onSignup} isLoading={isLoading} />}
        </div>
      </Box>
    </div>
  )
}
