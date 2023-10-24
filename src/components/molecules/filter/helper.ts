import {
  IFilter,
  IFilterValue,
  TFilterOption,
  TFilterValueOption
} from '@components/molecules/filter/types.ts'
import { IOption } from '@components/molecules/selectBox/types.ts'

export const handleClickFilterOption = (
  index: number,
  filter: TFilterOption,
  value: IFilterValue[],
  isAdding: boolean,
  onFilterSelect?: (filters: IFilterValue[]) => void
) => {
  if (isAdding) onFilterSelect?.(addItemToFilter(index, filter, value))
  else onFilterSelect?.(removeItemFromFilter(index, filter, value))
}

export const isItemSelected = (
  index: number,
  key: string,
  value: IFilterValue[]
) => {
  return value[index]?.values?.findIndex((value) => value?.key === key) >= 0
}

export const isAllItemSelected = (
  index: number,
  value: IFilterValue[],
  options: IFilter[]
) => {
  return value[index]?.values?.length === options[index]?.options?.length
}

export const addItemToFilter = (
  index: number,
  filter: TFilterOption,
  state: IFilterValue[]
): IFilterValue[] => {
  return state?.map((item, i) => {
    if (i === index)
      return {
        ...item,
        values: [
          ...(item?.values || []),
          { key: filter.key, value: filter.value }
        ]
      }
    else return { ...item }
  })
}

export const addAllItemsToFilter = (
  index: number,
  options: IFilter[],
  state: IFilterValue[],
  onFilterSelect?: (filters: IFilterValue[]) => void
) => {
  const isAllItemsSelected = isAllItemSelected(index, state, options)
  if (isAllItemsSelected) {
    clearAllFilters(onFilterSelect)
    return
  }
  const all = state?.map((item, i) => {
    if (i === index) {
      return {
        ...item,
        values: [...(options[index]?.options || [])]
      }
    } else return { ...item }
  })

  onFilterSelect?.(all)
}

export const removeItemFromFilter = (
  index: number,
  filter: TFilterOption,
  state: IFilterValue[]
) => {
  return state?.map((item, i) => {
    if (i === index)
      return {
        ...item,
        values: item?.values?.filter((value) => value?.key !== filter?.key)
      }
    else return { ...item }
  })
}

export const clearAllFilters = (
  onFilterSelect?: (filters: IFilterValue[]) => void
) => {
  onFilterSelect?.([])
}

export const normalizeFilterValues = (
  items: IFilter[],
  values: IFilterValue[]
): IFilterValue[] => {
  return items?.map((item, index) => {
    const value = values[index]

    return {
      ...value,
      key: value?.key || item?.key,
      title: value?.title || item?.title,
      values: value?.values || []
    }
  })
}

export const getParamName = (paramName: string, index?: string | number) => {
  return paramName + (index || '')
}
export const getFilterParamName = (index?: string | number) => {
  return getParamName('filters', index)
}

export function flattenJsonToQueryParam(
  jsonString: string,
  parentKey = ''
): string {
  // TODO CONVERT THEN SET
  try {
    const jsonObject = JSON.parse(jsonString)
    const params: string[] = []

    recurse(params, jsonObject, parentKey)

    return params.join('-')
  } catch (error) {
    console.error('Invalid JSON string.')
    return ''
  }
}

function recurse(params: string[], current: any, parent: string) {
  for (const key in current) {
    const value = current[key]
    const paramName = parent ? `${parent}.${key}` : key

    if (typeof value === 'object') {
      recurse(params, value, paramName)
    } else {
      params.push(`${paramName}~${value}`)
    }
  }
}

export function queryParamsToNestedJson(queryParams: string) {
  const paramsArray = queryParams.split('-')
  const jsonObject: { [key: string]: any } = {}

  paramsArray.forEach((param) => {
    const [paramName, value] = param.split('~')
    const keys = paramName.split('.')

    let currentObject = jsonObject

    for (let i = 0; i < keys.length; i++) {
      const key = keys[i]

      if (i === keys.length - 1) {
        currentObject[key] = value
      } else {
        if (!currentObject[key]) {
          currentObject[key] = {}
        }
        currentObject = currentObject[key]
      }
    }
  })

  const result: IFilterValue[] = []
  for (const key in jsonObject) {
    const value = jsonObject[key]
    if (!value) {
      return []
    }
    const { title, values } = value
    const valueArray: TFilterValueOption[] = []
    for (const key in values) {
      const value = values[key]
      valueArray.push(value)
    }

    const filterValue: IFilterValue = {
      key: key,
      title: title,
      values: valueArray
    }

    result.push(filterValue)
  }

  return result
}

export const filterToObjectMap = (
  options: IFilter[],
  values: IFilterValue[]
) => {
  const object: {
    [key: string]: string[] | undefined | Date | number[] | string | IOption
  } = {}
  options?.forEach((option, index) => {
    const value = values[index]

    const isValueExist = value?.values && value?.values?.length > 0

    if (!option?.variant || option?.variant === 'basic')
      if (isValueExist) {
        object[value?.key] = value?.values?.map((v) => v?.key)
        console.log('object', object)
      }

    if (option?.variant === 'timespan')
      if (isValueExist) {
        object['from'] = value?.values[1]?.from
        object['to'] = value?.values[1]?.to
      }

    if (option?.variant === 'cost')
      if (isValueExist) {
        object['costFrom'] = value?.values[1]?.costFrom
        object['costTo'] = value?.values[1]?.costTo
      }

    if (option?.variant === 'dropdown')
      if (isValueExist) object['dropdown'] = value?.values[1]?.dropdown

    console.log(value?.values?.map((v) => v?.key))
  })

  return object
}
