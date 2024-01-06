import { MouseEventHandler, ReactNode } from 'react'

export type IFormControlSize = 'small' | 'normal'

export interface FormControlProps<U> extends IconRendererProps {
  onChange?: (value: U) => void
  validation?: 'error' | 'success' | 'warning'
  value?: U
  size?: IFormControlSize
}
export type IconRendererProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon?: ReactNode | ((...args: any[]) => JSX.Element)
  /**
   * Event handler for the click event.
   */
  onIconClick?: MouseEventHandler<HTMLButtonElement>
  /**
   * Event handler for the mouse down event.
   */
  onIconMouseDown?: MouseEventHandler<HTMLButtonElement>

  showIcon?: boolean
  isLoading?: boolean
  isError?: boolean

  iconType?: 'image' | 'button'
}

export type IncludeFormControl<T, U> = Omit<
  T,
  keyof FormControlProps<U> | 'ref' | 'type'
> &
  FormControlProps<U>
