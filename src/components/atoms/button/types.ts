import {
  FormEventHandler,
  HTMLAttributes,
  MouseEventHandler,
  PropsWithChildren,
  ReactNode
} from 'react'

/**
 * Type representing different button sizes.
 */
export type TButtonSize = 'small' | 'normal' | 'big'

/**
 * Type representing the direction of button icons.
 */
export type TButtonIconDir = 'right' | 'left'

/**
 * Type representing different button types.
 */
export type TButtonType = 'submit' | 'button' | 'reset'

/**
 * Type representing different button variants.
 */
export type TButtonVariant = 'contained' | 'outlined' | 'transparent'

/**
 * Type representing different button colors.
 */
export type TButtonColor =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'

/**
 * Common props for all button components.
 */
export interface ICommonButtonProps extends PropsWithChildren {
  className?: string
  rootAttributes?: HTMLAttributes<HTMLButtonElement>
  disabled?: boolean
  isLoading?: boolean
  name?: string
  /**
   * Event handler for the click event.
   */
  onClick?: MouseEventHandler<HTMLButtonElement>
  /**
   * Event handler for the form submission event.
   */
  onSubmit?: FormEventHandler<HTMLButtonElement>
  size?: TButtonSize
  iconDir?: TButtonIconDir
}

/**
 * Base props for button components.
 */
export interface IButtonBaseProps extends ICommonButtonProps {
  label?: string
  icon?: ReactNode
  type?: TButtonType
}

/**
 * Props for the button component.
 */
export interface IButtonProps extends IButtonBaseProps {
  variant?: TButtonVariant
  color?: TButtonColor
  rounded?: boolean
  /**
   * Mode of the button.
   */
  mode: TButtonMode
}

/**
 * Type representing different button modes.
 */
export type TButtonMode =
  | 'default'
  | 'submit'
  | 'action'
  | 'add'
  | 'select'
  | 'cancel'
  | 'main'
  | 'secondary'
  | 'danger-main'
  | 'danger-secondary'

/**
 * Type representing button variants data.
 */
export type TButtonVariantsData = Record<
  TButtonMode,
  Omit<IButtonProps, 'mode'>
>
