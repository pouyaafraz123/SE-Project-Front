import { InputProps } from '..'
import { IOption } from '@/interfaces'

export interface MultiselectProps extends InputProps<IOption[]> {
  options: IOption[]
}
