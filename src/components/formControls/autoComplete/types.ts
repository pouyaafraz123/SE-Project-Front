import { FormControlProps } from '..'
import { IOption } from '@/components/molecules/selectBox/types'

export interface AutoCompleteProps
  extends FormControlProps<HTMLInputElement, IOption> {
  options: IOption[]
}
