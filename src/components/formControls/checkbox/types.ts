import { HtmlHTMLAttributes } from 'react'

export interface CheckboxProps
  extends Omit<HtmlHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
  onChange: (value: boolean) => void
  checked: boolean
  disabled?: boolean
  label?: string
}
