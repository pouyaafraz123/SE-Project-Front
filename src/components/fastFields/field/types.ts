import { FormikProps } from 'formik'
import { ParseKeys } from 'i18next'
import { iconNameType, IconProps } from '@/components/atoms/icons'
import { TypographyProps } from '@/components/atoms/typography'

export type FieldProps<T> = {
  name: keyof T & string
  children: React.ReactNode
  title: ParseKeys<'form'> // TODO get generic namespace
  titleProps?: TypographyProps
  formik: FormikProps<T>
  icon?: iconNameType | IconProps
  datepicker?: boolean
}
