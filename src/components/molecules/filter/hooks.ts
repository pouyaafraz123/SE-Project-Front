import {
  IFilter,
  IFilterProps,
  IFilterValue
} from '@components/molecules/filter/types.ts'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import {
  filterToObjectMap,
  flattenJsonToQueryParam,
  getFilterParamName,
  queryParamsToNestedJson
} from '@components/molecules/filter/helper.ts'

const FILTER_TIME = 800

/**
 * user selected some filters.
 * we set the timer.
 * if the value of the filters has changed before finishing the timeout:
 *   YES => refresh the timeout
 *   NO => we set the new timer
 * in the callback of the timeout, we have to clear the timer and set the debounced value.
 *   and if the onChange is not undefined call it.
 * finally, return value and onChange to handle the filter value.
 *    and debouncedValue to use in a query.
 *
 *
 * @param options
 * @param index
 * @param onChange a function to call when the debounced value has changed.
 */
export const useFilterParam = (
  options: IFilter[],
  index?: string | number,
  onChange?: (value: URLSearchParams) => void
) => {
  const navigate = useNavigate()
  const location = useLocation()

  const { search, state } = location
  const filterParamName = getFilterParamName(index)
  const params = new URLSearchParams(search)
  const filterParam = params.get(filterParamName)

  // get the search param value from the URL
  const initialValue =
    filterParam !== null
      ? (queryParamsToNestedJson(
          decodeURIComponent(filterParam)
        ) as unknown as IFilterValue[])
      : []

  // state for store the input value and debounced value
  const [value, setValue] = useState<IFilterValue[]>(initialValue)
  const [debouncedValue, setDebouncedValue] =
    useState<IFilterValue[]>(initialValue)

  // use ref to store the timer
  const timer = useRef<NodeJS.Timeout | null>(null)

  // declare set and delete param to/from the URL
  const setParam = (value: IFilterValue[]) => {
    params.set(
      filterParamName,
      flattenJsonToQueryParam(JSON.stringify(value, null, 0))
    )
    navigate({ search: params.toString() }, { state: state, replace: true })
  }

  // timeout callback function
  const setKeyword = (value: IFilterValue[]) => {
    // set the url param
    setParam(value)

    //set the debounced value
    setDebouncedValue(value)
    if (onChange) onChange(params)

    // clear the timer
    if (timer.current !== null) {
      clearTimeout(timer.current)
    }
    timer.current = null
  }

  //input change handler
  const changeHandler = (e: IFilterValue[]) => {
    setValue(e)

    if (timer.current === null) {
      // set the timeout
      timer.current = setTimeout(() => setKeyword(e), FILTER_TIME)
    } else {
      // refresh the timer
      clearTimeout(timer.current)
      timer.current = setTimeout(() => setKeyword(e), FILTER_TIME)
    }
  }

  useEffect(() => {
    if (filterParam === null) {
      setDebouncedValue([])
      setValue([])
    }
  }, [filterParam])

  const filterProps: IFilterProps = {
    onFilterSelect: changeHandler,
    index,
    options,
    value
  }

  return {
    filterProps,
    filterValues: filterToObjectMap(options, debouncedValue)
  }
}
