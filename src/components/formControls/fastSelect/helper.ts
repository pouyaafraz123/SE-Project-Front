import { QueryVariablesType } from '@api/dropdowns'
import { Dispatch, useReducer, useState } from 'react'
import { DependentDropdownTypesProps } from './dependentTypes'
import { IOption } from '@/interfaces'

/**
 * Checks if the given object is empty or not.
 * @param object | undefined object - The object to be checked for emptiness.
 * @returns boolean - Returns true if the object is empty, otherwise false.
 */
export function isEmptyObject(object: object | undefined) {
  if (object === undefined) {
    return true
  }
  for (let index = 0; index < Object.keys(object).length; index++) {
    const key = Object.keys(object)[index] as keyof object
    if (object[key] !== undefined && object[key] !== '') {
      return false
    }
  }
  return true
}

// this will work with input, dropdowns
// add more checks for new components if needed
function getKey(value: unknown): string {
  const val = value as string | { key: string }
  return typeof val == 'string' ? val : val.key
}

type reducerStateType<T> = Record<
  DependentDropdownTypesProps<T>['type'],
  IOption | undefined
>
function reducer<T>(
  state: reducerStateType<T>,
  action: { type: keyof reducerStateType<T>; value: IOption }
): reducerStateType<T> {
  return { ...state, [action.type]: action.value }
}

function checkMismatch<T>(
  values: T,
  fieldName: keyof T | undefined,
  state: reducerStateType<unknown>,
  stateName: DependentDropdownTypesProps<T>['type'],
  dispatch: Dispatch<{
    type: DependentDropdownTypesProps<T>['type']
    value: IOption<string>
  }>
) {
  const stateValue = state[stateName]
  if (fieldName && stateValue) {
    const value = values[fieldName] as IOption

    if (value.key !== stateValue.key && value.value !== stateValue.value) {
      dispatch({ type: stateName, value: value })
      return true
    }
    if (
      value.key === '' &&
      value.value === '' &&
      (stateValue.value !== '' || stateValue.key !== '')
    ) {
      dispatch({ type: stateName, value: value })
      return true
    }
  }
  return false
}
function getInitialValues<T>(
  values: T,
  props: DependentDropdownTypesProps<T>
): reducerStateType<T> {
  const initialValues: reducerStateType<T> = {
    city: undefined,
    hfDepartments: undefined,
    state: undefined,
    countryTimezone: undefined,
    medicineDosage: undefined,
    medicineType: undefined
  }
  switch (props.type) {
    case 'city':
      return { ...initialValues, city: values[props.stateField] as IOption }
    case 'state':
      return { ...initialValues, state: values[props.countryField] as IOption }
    case 'hfDepartments':
      return {
        ...initialValues,
        hfDepartments: values[props.hfNameField] as IOption
      }
    case 'countryTimezone':
      return {
        ...initialValues,
        countryTimezone: values[props.countryField] as IOption
      }
    case 'medicineDosage':
      return {
        ...initialValues,
        medicineDosage: values[props.medicineName] as IOption
      }
    case 'medicineType':
      return {
        ...initialValues,
        medicineType: values[props.medicineDosage] as IOption
      }
  }
}
export function useQueryParams<T>(
  values: T,
  props: DependentDropdownTypesProps<T>
): {
  params: QueryVariablesType
  state: reducerStateType<T>
  isChanged: boolean
} {
  const [state, dispatch] = useReducer(reducer, getInitialValues(values, props))
  const [isChanged, setIsChanged] = useState(false)
  function handleChanged(value: boolean) {
    if (!isChanged && value) {
      setIsChanged(true)
    }
  }
  let params: QueryVariablesType
  switch (props.type) {
    case 'city':
      handleChanged(
        checkMismatch(values, props.stateField, state, 'city', dispatch)
      )

      params = {
        optionType: 'city',
        params: {
          state_id: getKey(values[props.stateField!])
        }
      }
      break
    case 'state':
      handleChanged(
        checkMismatch(values, props.countryField, state, 'state', dispatch)
      )

      params = {
        optionType: 'state',
        params: {
          country_id: getKey(values[props.countryField!])
        }
      }
      break
    case 'countryTimezone':
      handleChanged(
        checkMismatch(
          values,
          props.countryField,
          state,
          'countryTimezone',
          dispatch
        )
      )

      params = {
        optionType: 'countryTimezone',
        params: {
          country_id: getKey(values[props.countryField!])
        }
      }
      break
    case 'hfDepartments':
      handleChanged(
        checkMismatch(
          values,
          props.hfNameField,
          state,
          'hfDepartments',
          dispatch
        )
      )

      params = {
        optionType: 'hfDepartments',
        params: {
          hf_id: getKey(values[props.hfNameField!])
        }
      }
      break
    case 'medicineDosage':
      handleChanged(
        checkMismatch(
          values,
          props.medicineName,
          state,
          'medicineDosage',
          dispatch
        )
      )

      params = {
        optionType: 'medicineDosage',
        params: {
          medicineName: getKey(values[props.medicineName!])
        }
      }
      break
    case 'medicineType':
      handleChanged(
        checkMismatch(
          values,
          props.medicineName,
          state,
          'medicineType',
          dispatch
        )
      )

      params = {
        optionType: 'medicineType',
        params: {
          medicineName: getKey(values[props.medicineName!]),
          medicineDosage: getKey(values[props.medicineDosage!])
        }
      }
      break
  }
  return { params, state, isChanged }
}
