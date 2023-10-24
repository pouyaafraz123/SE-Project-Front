import { PropsWithChildren } from 'react'

/**
 * Type representing different tooltip positions.
 */
export type TTooltipPos = 'default' | 'right' | 'left'

/**
 * Props for a tooltip component.
 * @interface ITooltipProps
 */
export interface ITooltipProps extends PropsWithChildren<any> {
  /**
   * The text content of the tooltip.
   */
  text: string
  /**
   * The position of the tooltip. Optional.
   * @type {TTooltipPos}
   */
  pos?: TTooltipPos
  /**
   * Additional CSS class name for styling. Optional.
   * @type {string}
   */
  className?: string
}
