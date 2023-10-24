import { HtmlHTMLAttributes } from 'react'

export type IFormControlSize = 'small' | 'normal'

export interface FormControlProps<T extends HTMLElement, U>
  extends Omit<HtmlHTMLAttributes<T>, 'value' | 'onChange'> {
  onChange?: (value: U) => void
  validation?: 'error' | 'success' | 'warning'
  readOnly?: boolean
  disabled?: boolean
  value?: U
  size?: IFormControlSize
}
