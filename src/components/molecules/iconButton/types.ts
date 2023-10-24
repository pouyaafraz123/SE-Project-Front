import { ReactNode } from 'react'
import { TTooltipPos } from '@/components/atoms/tooltip'
import { ICommonButtonProps } from '@/components/atoms/button'

/**
 * Props for an IconButton component, extending the ICommonButtonProps.
 *
 * @interface IIconButtonProps
 * @extends {Omit<ICommonButtonProps, 'iconDir' | 'size'>}
 */
export interface IIconButtonProps
  extends Omit<ICommonButtonProps, 'iconDir' | 'size'> {
  /**
   * The icon to be displayed on the button.
   * @type {ReactNode}
   */
  icon: ReactNode
  /**
   * The label or text associated with the button.
   * @type {string}
   */
  label: string
  /**
   * The position of the tooltip, if enabled. Optional.
   * @type {TTooltipPos}
   */
  tooltipPos?: TTooltipPos
  /**
   * Flag to disable the tooltip for this button. Optional.
   * @type {boolean}
   */
  noTooltip?: boolean
  /**
   * Flag to apply full rounded styling to the button. Optional.
   * @type {boolean}
   */
  fullRounded?: boolean
  /**
   * Flag to make the button transparent. Optional.
   * @type {boolean}
   */
  transparent?: boolean
}
