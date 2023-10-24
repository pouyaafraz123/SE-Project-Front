import { BoxProps } from '@components/atoms/box'
import { ReactNode } from 'react'

/**
 * Props for a container component used for wrapping cards.
 *
 * @interface ICardContainerProps
 */
export interface ICardContainerProps {
  /**
   * Additional BoxProps to apply to the container.
   */
  boxProps?: BoxProps
  /**
   * The children to be rendered within the container.
   */
  children: ReactNode
}

/**
 * Default BoxProps for the card container.
 * @type {BoxProps}
 */
export const defaultBoxProps: BoxProps = {
  radius: 'lg',
  py: '0',
  px: '0'
}
