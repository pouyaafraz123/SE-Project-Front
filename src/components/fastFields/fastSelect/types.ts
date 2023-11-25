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
type IHFDepartmentProps<T> = {
  type: 'hfDepartment'
} & (
  | { hfNameField: keyof T; hfNameId?: never }
  | { hfNameField?: never; hfNameId: string }
)

interface IHFTypeProps {
  type: 'hfType'
}

interface IHFDepartmentsProps {
  type: 'hfDepartments'
}

interface ISpecialityProps {
  type: 'speciality'
}
type ISubSpecialityProps<T> = {
  type: 'subSpeciality'
} & (
  | { specialityField: keyof T; specialityId?: never }
  | { specialityField?: never; specialityId: string }
)

interface IDoctorDegreeProps {
  type: 'doctorDegree'
}
interface ILanguageProps {
  type: 'language'
}
interface ILanguageSkillProps {
  type: 'languageSkills'
}

type ITimezoneProps<T> = {
  type: 'timezone'
} & (
  | { countryField: keyof T; countryId?: never }
  | { countryField?: never; countryId: string }
)

interface IDoctorSpecialityProps {
  type: 'speciality'
}

interface IVisitTypeProps {
  type: 'visitType'
}
interface IDaysProps {
  type: 'days'
}

export type DropdownTypeProps<T> =
  | IGenderProps
  | ISpecialityProps
  | ISubSpecialityProps<T>
  | ICountryProps
  | IStateProps<T>
  | ICityProps<T>
  | IHFDepartmentProps<T>
  | IHFTypeProps
  | ILanguageProps
  | IDoctorDegreeProps
  | ILanguageSkillProps
  | IHFDepartmentsProps
  | ITimezoneProps<T>
  | IDoctorSpecialityProps
  | IVisitTypeProps
  | IDaysProps
