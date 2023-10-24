import { FormControlProps } from '..'
import { IOption } from '@/components/molecules/selectBox/types'

export interface SelectProps
  extends FormControlProps<HTMLInputElement, IOption> {
  options: IOption[]
}
