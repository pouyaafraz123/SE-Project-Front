import { ParseKeys } from 'i18next'

export type Status = 'active' | 'denied' | 'pending'

export type IBreadcrumbs = {
  name: ParseKeys<'common'>
  link: string
}[]

export interface IOption<T extends string = string> {
  key: T
  value: string
  flag?: string
}

export type GenderTypes = 'male' | 'female'
