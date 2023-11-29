import { IOption } from '@/interfaces'

export type Options = IOption[]
export type OptionsType = 'country' | 'state' | 'city'

interface ICountryVars {
  OptionsType: 'country'
}
interface IStateVars {
  OptionsType: 'state'
  country_id: string
}

interface ICityVars {
  OptionsType: 'city'
  state_id: string
}

export type OptionQueryVars = ICountryVars | IStateVars | ICityVars

export interface IPhoneCode {
  key: string
  value: string
  flag: string
}
