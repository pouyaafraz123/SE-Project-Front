import { FormControlProps, IconRendererProps } from '..'

export interface DatePickerProps
  extends FormControlProps<HTMLInputElement, string> {
  date?: Date
}
