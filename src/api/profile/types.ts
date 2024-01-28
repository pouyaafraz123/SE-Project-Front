import { IOption } from '@/interfaces'

export interface IRoleEndpoint {
  id: number
  name: string // "super-admin"
  slug: string // "Super Admin"
}

export interface IFacilityEndpoint {
  id: number
  name: string
  type: IOption
  city: IOption
  state: IOption
  country: IOption
}

export interface IProfileEndpoint {
  uuid: string
  firstName: string
  lastName: string
  mobileNumber: string
  email: string
  role: string
  userState: string
  avatarFile: {
    fileId: string
    url: string
  }
  emailVerifiedAt: string
  setting: string
  panelGuid: string
}
