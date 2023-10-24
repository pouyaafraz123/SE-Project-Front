import { FormControlProps } from '..'
import { IOption } from '@/components/molecules/selectBox/types'

export interface MultiselectProps
  extends FormControlProps<HTMLInputElement, IOption[]> {
  options: IOption[]
}
