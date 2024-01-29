import { ParseKeys } from 'i18next'
import { iconNameType, IconProps } from '@/components/atoms/icons'

export type OptionalFieldProps = {
  name: string
  icon: iconNameType | IconProps
  title: ParseKeys<'form'>
}
