import { FormControlProps } from '..'
import { IOption } from '@/interfaces'

export interface MultiselectProps
  extends FormControlProps<HTMLInputElement, IOption[]> {
  options: IOption[]
}
