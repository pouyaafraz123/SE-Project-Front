import { IOption, HfTypes } from '@/interfaces'

export type InfiniteQueryTypes = 'user' | 'hf'

export type InfiniteFilterTypes = 'country' | 'state' | 'city'

export type InfiniteQueryVars = {
  country_id?: string
  state_id?: string
  city_id?: string
} & (
  | {
      type: 'user'
      speciality_id?: string
    }
  | { type: 'hf'; hf_type?: string }
)

export interface IUserSearchEndpoint {
  id: string
  userId: string
  firstName: string
  lastName: string
  speciality?: string
  imageUrl?: string
}

export interface IHFSearchEndpoint {
  id: string
  name: string
  type: IOption<HfTypes>
}
