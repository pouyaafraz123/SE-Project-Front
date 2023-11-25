import { IOption } from '@/interfaces'

export type IUserDTO = {
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
  role_name: 'doctor' | 'patient'
  national_id: string

  // doctor
  facility_id?: string
  speciality?: string
  sub_speciality?: string
  degree?: string
  licences?: {
    country_id: string
    code: string
  }
  office_information?: {
    city_id: string
    phone: string
    address: string
  }
  website?: string

  // staff
  employee_number?: string
}

export type IUserEndpoint = {
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
  //   role_name: 'doctor' | 'patient'

  // doctor
  hf_country: IOption
  hf_state: IOption
  hf_city: IOption
  hf_type: IOption
  hf_name: IOption
  speciality: IOption
  sub_speciality: IOption
  title: IOption
  licences: {
    country: IOption
    code: string
  }
  office_information: {
    country: IOption
    state: IOption
    city: IOption
    phone: string
    address: string
  }
  website: string

  // staff
  employee_number: string
}
