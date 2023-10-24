import { ReactNode } from 'react'
import { FormControlProps } from '..'

export interface InputProps
  extends FormControlProps<HTMLInputElement, string>,
    IconRendererProps {
  type?: 'email' | 'number' | 'password' | 'tel' | 'text' | 'search'
}
export type IconRendererProps = {
  icon?: ReactNode | (() => JSX.Element)
  onIconClick?: () => void
  showIcon?: boolean
  isLoading?: boolean
  isError?: boolean
}
