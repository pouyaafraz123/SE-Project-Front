import { FormControlProps } from '..'
import { IOption } from '@/interfaces'

export interface SelectProps
  extends FormControlProps<HTMLInputElement, IOption> {
  options: IOption[]
}
