import { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import { IncludeFormControl } from '..'

export interface InputProps<T>
  extends IncludeFormControl<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    T
  > {
  inputType?:
    | 'email'
    | 'number'
    | 'password'
    | 'tel'
    | 'text'
    | 'search'
    | 'time'
    | 'time'
}
