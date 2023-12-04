import { ParseKeys } from 'i18next'
import { FormikProps } from 'formik'
import { IUserSearchEndpoint } from '@api/infinite'
import { iconNameType, IconProps } from '@/components/atoms/icons'
import { Extends } from '@/utils'

type types = Extends<ParseKeys<'form'>, 'firstName'>

export const iconMap: { [key in types]: iconNameType | IconProps } = {
  firstName: 'user-rounded'
}

export type IFastInfiniteProps<T> = {
  name: keyof T
  title: ParseKeys<'form'>
  disabled?: boolean
  placeholder?: string
  dependents?: (keyof T)[]
  dependencies?: (keyof T)[]
  formik: FormikProps<T>
  icon?: iconNameType | IconProps
  readonly?: boolean
  onChangeFullData?: (data: IUserSearchEndpoint) => void
} & ISearchFilters<T>

export type ISearchFilters<T> = Country<T> &
  State<T> &
  City<T> &
  (
    | ({
        type: 'user'
      } & Speciality<T>)
    | ({
        type: 'hf'
      } & HFType<T>)
  )

type Country<T> =
  | { countryField?: keyof T; countryId?: never }
  | { countryField?: never; countryId?: string }

type State<T> =
  | { stateField?: keyof T; stateId?: never }
  | { stateField?: never; stateId?: string }

type City<T> =
  | { cityField?: keyof T; cityId?: never }
  | { cityField?: never; cityId?: string }

type Speciality<T> =
  | { specialityField?: keyof T; specialityId?: never }
  | { specialityField?: never; specialityId?: string }

type HFType<T> =
  | { hfTypeField?: keyof T; hfTypeId?: never }
  | { hfTypeField?: never; hfTypeId?: string }
