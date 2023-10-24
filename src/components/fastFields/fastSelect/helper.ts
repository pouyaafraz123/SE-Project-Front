import { OptionQueryVars } from '@api/dropdowns'
import { FormikProps } from 'formik'
import { IconProps, iconNameType } from '@components/atoms/icons'
import { DropdownTypeProps, OptType } from './types'

export const iconMap: { [key in OptType]: iconNameType | IconProps } = {
  country: 'globus',
  state: 'streets-map-point',
  city: 'map-point',
  gender: { name: 'men', type: 'broken' },
  hfType: 'hospital'
}

// TODO dropdown values are always key,value??
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
    case 'hfType':
      vars = { OptionsType: 'hfType' }
      break
  }
  return vars
}
