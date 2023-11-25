import { ParseKeys } from 'i18next'

export type Status = 'active' | 'denied' | 'pending'

export type IRole =
  | 'super-admin'
  | 'local-admin'
  | 'doctor'
  | 'cmo'
  | 'staff'
  | 'patient'

export type IBreadcrumbs = {
  name: ParseKeys<'common'>
  link: string
}[]

export interface IOption<T extends string = string> {
  key: T
  value: string
  flag?: string
}

export type HfTypes = 'hospital' | 'clinic' | 'health_center'
export type GenderTypes = 'male' | 'female'
