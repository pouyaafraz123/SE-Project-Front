import { ParseKeys } from 'i18next'
import { Extends } from '@utils'
import * as path from './path'
import { ExtractParams } from '@/routes/types'

export interface IPhoneCode {
  key: string
  value: string
  flag: string
}

export type SelectType = Extends<
  ParseKeys<'form'>,
  | 'familyMember'
  | 'paymentMethod'
  | 'medicalDeviceType'
  | 'relationship'
  | 'gender'
  | 'hfType'
  | 'orderType'
  | 'doctorEducation'
  | 'languageSkills'
  | 'days'
  | 'visitType'
  | 'timezone'
>

export type IndependentAutocompleteType = Extends<
  ParseKeys<'form'>,
  'speciality' | 'language' | 'medicine' | 'dosage' | 'country' | 'medicineName'
>

export type DependentAutocompleteType = Extends<
  ParseKeys<'form'>,
  | 'state'
  | 'city'
  | 'countryTimezone'
  | 'hfDepartments'
  | 'medicineType'
  | 'medicineDosage'
>

export type MultiselectType = Extends<ParseKeys<'form'>, 'allDepartments'>

export type AllDropdownType =
  | SelectType
  | IndependentAutocompleteType
  | DependentAutocompleteType
  | MultiselectType

type Param<T extends AllDropdownType, K> = {
  optionType: T
  params: ExtractParams<K>
}
export type QueryVariablesType =
  | Param<'allDepartments', typeof path.ALL_DEPARTMENTS>
  | Param<'hfDepartments', typeof path.HF_DEPARTMENT>
  | Param<'city', typeof path.CITY>
  | Param<'orderType', typeof path.CLINICAL_ORDER_TYPE>
  | Param<'country', typeof path.COUNTRY>
  | Param<'doctorEducation', typeof path.DOCTOR_DEGREE>
  | Param<'dosage', typeof path.DOSAGE>
  | Param<'familyMember', typeof path.FAMILY_MEMBER>
  | Param<'gender', typeof path.GENDER>
  | Param<'hfType', typeof path.HF_TYPE>
  | Param<'language', typeof path.LANGUAGE>
  | Param<'languageSkills', typeof path.LANGUAGE_SKILL>
  | Param<'medicalDeviceType', typeof path.MEDICAL_DEVICE_TYPE>
  | Param<'medicine', typeof path.MEDICINE>
  | Param<'medicineType', typeof path.MEDICINE_TYPE>
  | Param<'paymentMethod', typeof path.PAYMENT>
  | Param<'relationship', typeof path.RELATIONSHIP>
  | Param<'speciality', typeof path.SPECIALITY>
  | Param<'state', typeof path.STATE>
  | Param<'timezone', typeof path.TIMEZONE>
  | Param<'countryTimezone', typeof path.COUNTRY_TIMEZONE>
  | Param<'days', typeof path.DAYS>
  | Param<'visitType', typeof path.VISIT_TYPE>
  | Param<'medicineName', typeof path.MEDICINE_NAME>
  | Param<'medicineDosage', typeof path.MEDICINE_DOSAGE>
