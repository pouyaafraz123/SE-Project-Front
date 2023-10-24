import { IOption } from '@/components/molecules/selectBox/types'

export type Options = IOption[]
export type OptionsType = 'country' | 'state' | 'city' | 'hfType'

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
interface IHFTypeVars {
  OptionsType: 'hfType'
}

export type OptionQueryVars =
  | ICountryVars
  | IStateVars
  | ICityVars
  | IHFTypeVars

export interface IPhoneCode {
  key: string
  value: string
  flag: string
}
