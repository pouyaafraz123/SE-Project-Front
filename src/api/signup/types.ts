import { UserTypes } from '@constants'

export type ISignupDTO = {
  userType: UserTypes
  email: string
  password: string
}

export type ISignup = {
  token: string
  role: UserTypes
}
