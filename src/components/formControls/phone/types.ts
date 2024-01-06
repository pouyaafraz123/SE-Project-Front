import { InputProps } from '..'
import { IOption } from '@/interfaces'

export interface IPhoneNumber {
  code: string
  number: string
}

export interface PhoneProps extends InputProps<IPhoneNumber> {
  countries: IOption[]
  /** By default is `+98` */
  defaultCode?: string
}
