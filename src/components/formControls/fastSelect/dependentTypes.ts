import { DependentAutocompleteType } from '@/api/dropdowns'

type IStateProps<T> = { countryField: keyof T }

type ICityProps<T> = { stateField: keyof T }

type IHFDepartmentProps<T> = { hfNameField: keyof T }

type ITimezoneProps<T> = { countryField: keyof T }

type IMedicineDosageProps<T> = { medicineName: keyof T }

type IMedicineFormulationProps<T> = {
  medicineName: keyof T
  medicineDosage: keyof T
}

type PickDropdownProps<U extends DependentAutocompleteType, K> = { type: U } & K

export type DependentDropdownTypesProps<T> =
  | PickDropdownProps<'state', IStateProps<T>>
  | PickDropdownProps<'city', ICityProps<T>>
  | PickDropdownProps<'hfDepartments', IHFDepartmentProps<T>>
  | PickDropdownProps<'countryTimezone', ITimezoneProps<T>>
  | PickDropdownProps<'medicineDosage', IMedicineDosageProps<T>>
  | PickDropdownProps<'medicineType', IMedicineFormulationProps<T>>
