import { IPhoneNumber } from '@/components/formControls/phone'
import { IOption } from '@/components/molecules/selectBox/types'

export type IHealthFacilityTable = {
  id: number
  name: string
  parent_name?: string
  state: string
  city: string
  type: string
  address: string
}

export type IHealthFacility = {
  id: number
  type: IOption
  name: string
  country: IOption
  state: IOption
  city: IOption
  postal_code: string
  phone: { code: string; number: string; flag?: string }
  fax: { code: string; number: string; flag?: string }
  website: string
  email: string
  contact_first_name: string
  contact_last_name: string
  departments: { id: number; name: string }[]
  address: string
  lat: string
  lang: string
}

export type IHealthFacilityDTO = {
  type: string
  name: string
  city_id: number
  postal_code: string
  phone: string
  fax: string
  website: string
  email: string
  contact_first_name: string
  contact_last_name: string
  departments: { name: string }[]
  address: string
  lat?: string
  lang?: string
  parent_id?: number
}
