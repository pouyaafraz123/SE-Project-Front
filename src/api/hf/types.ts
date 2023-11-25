import { IPhoneNumber } from '@/components/formControls/phone'
import { HfTypes, IOption } from '@/interfaces'

export type IHealthFacilityTable = {
  id: string
  name: string
  parent_name: string | null
  state: IOption
  city: IOption
  type: IOption<HfTypes>
  address: string
}

export type IHealthFacility = {
  id: string
  type: IOption
  name: string
  country: IOption
  state: IOption
  city: IOption
  postal_code: string
  phone: string
  fax: string
  website: string
  email: string
  contact_first_name: string
  contact_last_name: string
  departments: IOption[]
  address: string
  lat: string
  lang: string
  parent: IHealthFacility | null
  timezone: IOption
}

export type IHealthFacilityDTO = {
  type: string
  name: string
  city_id: string
  postal_code: string
  phone: string
  fax: string
  website: string
  email: string
  contact_first_name: string
  contact_last_name: string
  departments: string[]
  address: string
  lat?: string
  lang?: string
  parent_id?: string | null
  timezone_id: string
}
