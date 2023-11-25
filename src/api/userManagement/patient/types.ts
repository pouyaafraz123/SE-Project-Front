import { GenderTypes, HfTypes, IOption } from '@/interfaces'

export type IPatientListEndpoint = {
  id: string
  user_id: string
  first_name: string
  last_name: string
  birthday: string
  hf_type: IOption<HfTypes>
  hf_name: string
  hf_id: string
  gender: IOption<GenderTypes>
  mobile: string
  state: IOption
  city: IOption
}

export type IPatientDetailEndpoint = {
  id: string
  first_name: string
  last_name: string
  email: string
  phone?: string
  mobile: string
  gender: IOption
  birthday: string
  address: string
  country: IOption
  state: IOption
  city: IOption
  postal_code: string
  national_id: string

  // patient_file_number?: string
}

export type IPatientDTO = {
  id?: string
  first_name: string
  last_name: string
  email: string
  phone?: string
  mobile: string
  gender: string
  birthday: string
  address: string
  city_id: string
  postal_code: string
  national_id: string

  // patient_file_number?: string
}
