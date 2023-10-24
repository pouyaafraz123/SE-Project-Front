import { ParseKeys } from 'i18next'
import { FormikProps } from 'formik'
import { OptionsType } from '@/api/dropdowns'
import { IconProps, iconNameType } from '@/components/atoms/icons'

export type OptType = OptionsType | 'gender'
export type IProps<T> = {
  name: keyof T
  title?: ParseKeys<'form'>
  type: OptType
  disabled?: boolean
  placeholder?: string
  dependents?: (keyof T)[]
  dependencies?: (keyof T)[]
  formik: FormikProps<T>
  icon?: iconNameType | IconProps
  readonly?: boolean
} & DropdownTypeProps<T>

interface IGenderProps {
  type: 'gender'
}
interface ICountryProps {
  type: 'country'
}
type IStateProps<T> = {
  type: 'state'
} & (
  | { countryField: keyof T; countryId?: never }
  | { countryField?: never; countryId: string }
)
type ICityProps<T> = {
  type: 'city'
} & (
  | { stateField: keyof T; stateId?: never }
  | { stateField?: never; stateId: string }
)

interface IHFTypeProps {
  type: 'hfType'
}

export type DropdownTypeProps<T> =
  | IGenderProps
  | ICountryProps
  | IStateProps<T>
  | ICityProps<T>
  | IHFTypeProps
