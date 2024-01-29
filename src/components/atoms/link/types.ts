import { LinkProps } from 'react-router-dom'
import { color, fontFamilyType, fontSizeType, fontWeightType } from '@constants'

export interface ILinkProps extends LinkProps {
  fontSize?: fontSizeType
  fontFamily?: fontFamilyType
  fontWeight?: fontWeightType
  color?: color
}
