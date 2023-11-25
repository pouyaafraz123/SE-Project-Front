import { FormikProps } from 'formik'
import { ISearchFilters } from './types'
import { InfiniteQueryVars } from '@/api/infinite'

function getKey(value: unknown): string | undefined {
  const val = value as string | { key?: string } | undefined
  return val && (typeof val == 'string' ? val : val.key)
}

export function queryParams<T>(
  formik: FormikProps<T>,
  props: ISearchFilters<T>
): InfiniteQueryVars {
  const { values } = formik
  let vars: InfiniteQueryVars

  switch (props.type) {
    case 'user':
      vars = {
        type: 'user',
        country_id: props.countryId || getKey(values[props.countryField!]),
        state_id: props.stateId || getKey(values[props.stateField!]),
        city_id: props.cityId || getKey(values[props.cityField!]),
        speciality_id:
          props.specialityId || getKey(values[props.specialityField!])
      }
      break
    case 'hf':
      vars = {
        type: 'hf',
        country_id: props.countryId || getKey(values[props.countryField!]),
        state_id: props.stateId || getKey(values[props.stateField!]),
        city_id: props.cityId || getKey(values[props.cityField!]),
        hf_type: props.hfTypeId || getKey(values[props.hfTypeField!])
      }
  }
  return vars
}
