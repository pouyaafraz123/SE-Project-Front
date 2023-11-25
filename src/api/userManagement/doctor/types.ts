import { HfTypes, GenderTypes, IOption } from '@/interfaces'

export type IDoctorListEndpoint = {
  id: string
  user_id: string // only for viewing
  first_name: string
  last_name: string
  speciality: IOption // TODO add type
  hf_type: IOption<HfTypes>
  hf_name: string
  hf_id: string
  gender: IOption<GenderTypes>
  // languages: string[] // key,value??
}

export type IDoctorDetailEndpoint = {
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

  facility: {
    country: IOption
    state: IOption
    city: IOption
    type: IOption
    name: IOption
  }
  speciality: IOption
  sub_speciality?: IOption
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
}

export type IDoctorDTO = {
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

  facility_id: string
  speciality: string
  sub_speciality?: string
  title: string // phd-...
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
}
