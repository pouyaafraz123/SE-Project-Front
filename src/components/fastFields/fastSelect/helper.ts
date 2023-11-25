import { OptionQueryVars } from '@api/dropdowns'
import { FormikProps } from 'formik'
import { IconProps, iconNameType } from '@components/atoms/icons'
import { DropdownTypeProps, OptType } from './types'

export const iconMap: { [key in OptType]: iconNameType | IconProps } = {
  country: 'globus',
  state: 'streets-map-point',
  city: 'map-point',
  gender: { name: 'men', type: 'broken' },
  hfType: 'hospital',
  hfDepartments: 'hospital',
  timezone: 'add-square', // TODO icon?
  speciality: 'medal-star-square',
  subSpeciality: 'medal-star-square',
  language: 'dialog',
  languageSkills: 'chat-round-check',
  doctorDegree: 'square-academic-cap',
  hfDepartment: 'buildings',
  visitType: 'monitor-camera',
  days: 'calendar'
}

// this will work with input, dropdowns
// add more checks for new components if needed
function getKey(value: unknown): string {
  const val = value as string | { key: string }
  return typeof val == 'string' ? val : val.key
}

export function queryParams<T>(
  formik: FormikProps<T>,
  props: DropdownTypeProps<T>
): OptionQueryVars {
  const { values } = formik
  let vars: OptionQueryVars

  switch (props.type) {
    case 'gender':
      vars = {
        OptionsType: 'country' // dummy query. would never run
      }
      break
    case 'country':
      vars = { OptionsType: 'country' }
      break
    case 'state':
      vars = {
        OptionsType: 'state',
        country_id: props.countryId || getKey(values[props.countryField!])
      }
      break
    case 'city':
      vars = {
        OptionsType: 'city',
        state_id: props.stateId || getKey(values[props.stateField!])
      }
      break
    case 'hfDepartment':
      vars = {
        OptionsType: 'hfDepartment',
        hfName_id: props.hfNameId || getKey(values[props.hfNameField!])
      }
      break
    case 'hfType':
      vars = { OptionsType: 'hfType' }
      break
    case 'hfDepartments':
      vars = { OptionsType: 'hfDepartments' }
      break
    case 'speciality':
      vars = { OptionsType: 'speciality' }
      break
    case 'days':
      vars = { OptionsType: 'days' }
      break
    case 'subSpeciality':
      vars = {
        OptionsType: 'subSpeciality',
        speciality_id:
          props.specialityId || getKey(values[props.specialityField!])
      }
      break
    case 'language':
      vars = { OptionsType: 'language' }
      break
    case 'languageSkills':
      vars = { OptionsType: 'languageSkills' }
      break
    case 'doctorDegree':
      vars = { OptionsType: 'doctorDegree' }
      break
    case 'timezone':
      vars = {
        OptionsType: 'timezone',
        country_id: props.countryId || getKey(values[props.countryField!])
      }
      break
    case 'visitType':
      vars = {
        OptionsType: 'visitType'
      }
      break
  }
  return vars
}
