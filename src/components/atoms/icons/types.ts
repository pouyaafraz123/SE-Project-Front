import { EnumIconName } from './iconNames'
import { color, fontSizeType, fontWeightType } from '@/constants'

export type iconNameType = keyof typeof EnumIconName

export interface IconProps {
  className?: string
  name: iconNameType
  type?: IIconTypes
  fontSize?: fontSizeType
  fontWeight?: fontWeightType
  color?: color
  onClick?: () => void
}

export type IIconTypes = 'linear' | 'bold' | 'broken' | 'bold-duotone'
