import { ParseKeys } from 'i18next'
import { FieldProps } from '../field'
import { DependentDropdownTypesProps } from './dependentTypes'
import {
  AllDropdownType,
  DependentAutocompleteType,
  MultiselectType,
  SelectType
} from '@/api/dropdowns'
import { iconNameType, IconProps } from '@/components/atoms/icons'
import {
  AutoCompleteProps,
  MultiselectProps,
  SelectProps
} from '@/components/formControls'

export type DropdownsIconType = Record<
  AllDropdownType,
  iconNameType | IconProps
>

type DropdownProps<K, T> = {
  type: K
  dependencies?: (keyof T & string)[]
} & Required<Pick<FieldProps<T>, 'formik' | 'name'>> &
  Partial<Pick<FieldProps<T>, 'icon' | 'title'>>

export type FastSelectProps<T> = DropdownProps<SelectType, T> &
  Pick<SelectProps, 'disabled' | 'readOnly' | 'placeholder'>

export type FastMultiSelectProps<T> = DropdownProps<MultiselectType, T> &
  Pick<MultiselectProps, 'disabled' | 'readOnly' | 'placeholder'>

export type FastAutocompleteProps<T> = DropdownProps<ParseKeys<'form'>, T> &
  Pick<
    AutoCompleteProps,
    | 'disabled'
    | 'readOnly'
    | 'placeholder'
    | 'options'
    | 'isError'
    | 'isLoading'
  >

export type DependentAutocompleteProps<T> = DropdownProps<
  DependentAutocompleteType,
  T
> &
  DependentDropdownTypesProps<T> &
  Pick<AutoCompleteProps, 'disabled' | 'readOnly' | 'placeholder'>
