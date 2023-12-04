import { UserTypes } from '@constants'

export type ILogin = {
  token: string
  role: UserTypes
}

export type ILoginDTO = {
  userType: UserTypes
  email: string
  password: string
}
