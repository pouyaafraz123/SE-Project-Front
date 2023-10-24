import { FormControlProps } from '..'

export interface TextareaProps
  extends FormControlProps<HTMLTextAreaElement, string> {
  rows?: number
}
