import { InputProps } from '..'
import { OmitSafety } from '@/utils/typeTools'
import { IOption } from '@/interfaces'

export interface AutoCompleteProps
  extends OmitSafety<InputProps<IOption>, 'onIconClick'> {
  options: IOption[]
}
