import { HtmlHTMLAttributes } from 'react'

export interface RadioButtonProps
  extends Omit<HtmlHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
  /**
   * The currently selected value.
   */
  selectedValue: string
  /**
   * Each radio button should have a uniq value
   */
  value: string
  onChange?: (value: string) => void
  disabled?: boolean
  readOnly?: boolean
  label: string
}
