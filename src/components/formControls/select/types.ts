import { InputProps } from '..'
import { IOption } from '@/interfaces'

export interface SelectProps extends InputProps<IOption> {
  options: IOption[]
}
