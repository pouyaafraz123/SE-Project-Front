import { ILoginDTO } from '@api/login'
import { ISignupDTO } from '@api/signup'

export interface ISideProps {
  onChange: () => void
}

export interface IAuthTemplateProps extends ILoginProps, ISignupProps {}

export interface ILoginProps extends ILoadingState {
  onLogin: (data: ILoginDTO) => void
}

export interface ISignupProps extends ILoadingState {
  onSignup: (data: ISignupDTO) => void
}

export interface ILoadingState {
  isLoading?: boolean
}
