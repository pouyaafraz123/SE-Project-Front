import { IOption } from '@/interfaces'

export type Options = IOption[]
export type OptionsType =
  | 'country'
  | 'state'
  | 'city'
  | 'hfType'
  | 'hfDepartments'
  | 'timezone'
  | 'speciality'
  | 'language'
  | 'languageSkills'
  | 'doctorDegree'
  | 'hfDepartment'
  | 'visitType'
  | 'subSpeciality'
  | 'days'

interface ICountryVars {
  OptionsType: 'country'
}
interface IStateVars {
  OptionsType: 'state'
  country_id: string
}

interface ICityVars {
  OptionsType: 'city'
  state_id: string
}
interface IHFTypeVars {
  OptionsType: 'hfType'
}
interface IHFDepartmentsVars {
  OptionsType: 'hfDepartments'
}
interface IHFDepartmentVars {
  OptionsType: 'hfDepartment'
  hfName_id: string
}
interface ISpecialityVars {
  OptionsType: 'speciality'
}
interface ILanguageVars {
  OptionsType: 'language'
}
interface ILanguageSkillVars {
  OptionsType: 'languageSkills'
}
interface IDoctorDegreeVars {
  OptionsType: 'doctorDegree'
}
interface ITimezoneVars {
  OptionsType: 'timezone'
  country_id: string
}
interface IDocotrSpecialityVars {
  OptionsType: 'speciality'
}
interface IDocotrSubSpecialityVars {
  OptionsType: 'subSpeciality'
  speciality_id: string
}
interface IVisitTypeVars {
  OptionsType: 'visitType'
}
interface IDaysVars {
  OptionsType: 'days'
}

export type OptionQueryVars =
  | ICountryVars
  | ISpecialityVars
  | IDocotrSubSpecialityVars
  | IStateVars
  | ICityVars
  | IHFTypeVars
  | IHFDepartmentsVars
  | ITimezoneVars
  | IDoctorDegreeVars
  | ILanguageSkillVars
  | ILanguageVars
  | IHFDepartmentVars
  | IDocotrSpecialityVars
  | IVisitTypeVars
  | IDaysVars

export interface IPhoneCode {
  key: string
  value: string
  flag: string
}
