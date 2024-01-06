import { DetailedHTMLProps, TextareaHTMLAttributes } from 'react'
import { IncludeFormControl } from '..'

export interface TextareaProps
  extends IncludeFormControl<
    DetailedHTMLProps<
      TextareaHTMLAttributes<HTMLTextAreaElement>,
      HTMLTextAreaElement
    >,
    string
  > {
  rows?: number
}
