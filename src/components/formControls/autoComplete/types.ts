import { FormControlProps } from '..'
import { IOption } from '@/interfaces'

export interface AutoCompleteProps
  extends FormControlProps<HTMLInputElement, IOption> {
  options: IOption[]
}
