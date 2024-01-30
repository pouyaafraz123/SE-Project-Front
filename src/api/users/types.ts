import { UserTypes } from '@constants'

export interface IUsers {
  uuid: string
  firstName: string
  lastName: string
  mobileNumber: string
  email: string
  role: UserTypes
  userState: string
  avatarFile: {
    fileId: 'd2067cf5-3ed7-4b9f-89d5-c3ff6203cd58'
  }
}

export interface IUserParams {
  Role?: UserTypes
}
