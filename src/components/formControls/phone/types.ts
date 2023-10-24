import { FormControlProps } from '..'
import { IOption } from '@/components/molecules/selectBox/types'

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
