import { color, radius, spaceSize } from '@/constants/stylesVariables'

export interface BoxProps
  extends Omit<React.HtmlHTMLAttributes<HTMLDivElement>, 'className'> {
  className?: string
  radius: radius
  /**
   * padding left and right
   */
  px: spaceSize
  /**
   * padding top and bottom
   */
  py: spaceSize

  borderNone?: boolean
  /**
   * to set the width of an element to 100% of its parent container.
   */
  w100?: boolean
  shadow?: boolean
  borderStyle?: 'dashed' | 'solid'
  backgroundColor?: color
  borderColor?: color
}
