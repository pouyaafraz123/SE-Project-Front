import { FormControlProps } from '..'
import { IOption } from '@/interfaces'

export interface IPhoneNumber {
  code: string
  number: string
}

export interface PhoneProps
  extends FormControlProps<HTMLInputElement, IPhoneNumber> {
  countries: IOption[]
  /** By default is `+98` */
  defaultCode?: string
}
