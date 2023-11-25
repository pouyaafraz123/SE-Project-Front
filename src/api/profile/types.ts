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
  id: number
  first_name: string
  last_name: string
  email: string
  mobile: string
  avatar: string
  facilities: IFacilityEndpoint[]
  roles: IRoleEndpoint[]
  current_facility: number
}
