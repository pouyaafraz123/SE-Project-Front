import { QueryVariablesType } from './types'

//  select and filters
export const FAMILY_MEMBER = '/dropdown/family-member'
export const PAYMENT = '/dropdown/payment'
export const MEDICAL_DEVICE_TYPE = '/dropdown/medical-device-type'
export const RELATIONSHIP = '/dropdown/relationship'
export const GENDER = '/dropdown/gender'
export const HF_TYPE = '/dropdown/facility/types'
export const CLINICAL_ORDER_TYPE = '/dropdown/clinical-order-type'
export const DOCTOR_DEGREE = '/dropdown/doctor-degree'
export const LANGUAGE_SKILL = '/dropdown/language-skill'
export const DAYS = '/dropdown/days'
export const VISIT_TYPE = '/dropdown/visit-type'
export const TIMEZONE = '/dropdown/timezones'

//  independent autocomplete
export const SPECIALITY = '/dropdown/doctors-specialities'
export const LANGUAGE = '/dropdown/language'
export const MEDICINE = '/dropdown/medicine'
export const DOSAGE = '/dropdown/dosage'
export const MEDICINE_TYPE =
  '/dropdown/medicine-formulation/:medicineName/:medicineDosage'
export const COUNTRY = '/dropdown/countries'

// dependent autocomplete
export const STATE = '/dropdown/countries/:country_id/states'
export const CITY = '/dropdown/states/:state_id/cities'
export const COUNTRY_TIMEZONE = '/dropdown/countries/:country_id/timezones'
export const HF_DEPARTMENT = '/dropdown/departments/:hf_id'

//  multiselect
export const ALL_DEPARTMENTS = '/dropdown/departments'

export const MEDICINE_NAME = '/dropdown/medicine-name'
export const MEDICINE_DOSAGE = '/dropdown/medine-dosage/:medicineName'
export const dropdownURLs: Record<QueryVariablesType['optionType'], string> = {
  allDepartments: ALL_DEPARTMENTS,
  orderType: CLINICAL_ORDER_TYPE,
  doctorEducation: DOCTOR_DEGREE,
  familyMember: FAMILY_MEMBER,
  hfDepartments: HF_DEPARTMENT,
  hfType: HF_TYPE,
  languageSkills: LANGUAGE_SKILL,
  medicalDeviceType: MEDICAL_DEVICE_TYPE,
  medicineType: MEDICINE_TYPE,
  city: CITY,
  country: COUNTRY,
  dosage: DOSAGE,
  gender: GENDER,
  language: LANGUAGE,
  medicine: MEDICINE,
  paymentMethod: PAYMENT,
  relationship: RELATIONSHIP,
  speciality: SPECIALITY,
  state: STATE,
  timezone: TIMEZONE,
  countryTimezone: COUNTRY_TIMEZONE,
  days: DAYS,
  visitType: VISIT_TYPE,
  medicineDosage: MEDICINE_DOSAGE,
  medicineName: MEDICINE_NAME
}
