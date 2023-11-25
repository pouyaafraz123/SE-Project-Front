import { getParamName, useFilterParam } from '@components/molecules/filter'
import {
  ITableTabProps,
  IUseTableParams,
  TPageTableParamProps
} from '@components/organisms/pageTable/types.ts'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useMemo, useRef, useState } from 'react'
import { ITableSearchProps } from '@components/molecules/tableSearch'
import { ITabObject } from '@components/molecules/headerTabGroup'

const SEARCH_TIME = 800 //ms
const DEFAULT_PAGE_SIZE = 10

export const useTableParams = ({ index, filters, tabs }: IUseTableParams) => {
  const {
    pagination,
    onPageChange,
    handleResultsPerPageChange,
    resetPage,
    resetPageAndSize
  } = usePagination(index)

  const { value, debouncedValue, changeHandler } = useSearchParam(
    index,
    resetPage
  )
  const { filterProps, filterValues } = useFilterParam(
    filters,
    index,
    resetPage
  )

  const { selectedTab, onTabChangeHandler } = useTabParam(
    tabs,
    index,
    resetPage
  )

  const searchProps: ITableSearchProps = {
    value,
    onChange: changeHandler
  }

  const tabParams: ITableTabProps | undefined = tabs
    ? {
        tabs,
        onChange: onTabChangeHandler,
        selectedKey: selectedTab
      }
    : undefined

  const tableProps: TPageTableParamProps = {
    filterProps,
    searchProps,
    pagination: {
      onPageChange,
      page: pagination?.currentPage,
      per_page: pagination?.resultsPerPage,
      onResultPerPageChange: handleResultsPerPageChange
    },
    tabProps: tabParams
  }

  return {
    searchValue: debouncedValue,
    paginationValues: pagination,
    tableProps,
    filterValues
  }
}

/**
 * hook that manage pagination
 * @param index index of pagination. If u have more than one pagination in your page, u have to give an index to handle url parameters separately.
 * @returns
 */
function usePagination(index?: number | string) {
  // console.log("render from usePagination");

  const navigate = useNavigate()
  const { search, state } = useLocation()
  const params = new URLSearchParams(search)

  const currentPageParamName = getCurrentPageParamName(index)
  const resultPerPagePageParamName = getResultsPerPageParamName(index)

  const currentPageParamValue = params.get(currentPageParamName)
  const resultPerPagePageParamValue = params.get(resultPerPagePageParamName)

  const [pagination, setPagination] = useState({
    currentPage:
      currentPageParamValue === null ? 1 : Number(currentPageParamValue),
    resultsPerPage:
      resultPerPagePageParamValue === null
        ? DEFAULT_PAGE_SIZE
        : Number(resultPerPagePageParamValue)
  })

  const setParam = (
    name: string,
    value: string | number,
    newParams?: URLSearchParams
  ) => {
    params.set(name, String(value))
    newParams?.set(name, String(value))
    navigate(
      { search: newParams ? newParams.toString() : params.toString() },
      { state, replace: true }
    )
  }

  const onPageChange = (page: number) => {
    setPagination((prev) => ({
      ...prev,
      currentPage: page
    }))
  }

  const handleResultsPerPageChange = (
    resultsPerPage: number,
    totalResultsCount?: number
  ) => {
    setPagination({
      currentPage: 1,
      resultsPerPage
    })
    setParam(resultPerPagePageParamName, resultsPerPage)
    setParam(currentPageParamName, 1)
  }

  const resetPage = (newParams: URLSearchParams) => {
    setPagination((prev) => ({ ...prev, currentPage: 1 }))
    setParam(currentPageParamName, 1, newParams)
  }

  const resetPageAndSize = () => {
    setPagination((prev) => ({
      ...prev,
      currentPage: 1,
      resultsPerPage: DEFAULT_PAGE_SIZE
    }))
  }

  useEffect(() => {
    if (resultPerPagePageParamValue === null) {
      setPagination((perv) => ({ ...perv, resultsPerPage: DEFAULT_PAGE_SIZE }))
    }
    if (currentPageParamValue === null) {
      setPagination((perv) => ({ ...perv, currentPage: 1 }))
    }
  }, [resultPerPagePageParamValue, currentPageParamValue])

  return {
    pagination,
    onPageChange,
    handleResultsPerPageChange,
    resetPage,
    resetPageAndSize
  }
}

/**
 * user typed something.
 * we set the timer.
 * if the value of the search input has changed before finishing the timeout:
 *   YES => refresh the timeout
 *   NO => we set the new timer
 * in the callback of the timeout we have to clear the timer and set the debounced value.
 *   and if the onChange is not undefined call it.
 * finally return value and onChange to handle the search input value.
 *    and debouncedValue to use in query.
 */
/**
 *
 * @param index
 * @param onChange a function to call when the debounced value has changed.
 */
const useSearchParam = (
  index?: string | number,
  onChange?: (value: URLSearchParams) => void
) => {
  const navigate = useNavigate()
  const { search, state } = useLocation()
  const searchParamName = getSearchParamName(index)
  const params = useMemo(() => new URLSearchParams(search), [search])
  const searchParamValue = params.get(searchParamName)

  // get the search param value from the URL
  const initialValue =
    searchParamValue !== null ? decodeURIComponent(searchParamValue) : ''

  // state for store the input value and debounced value
  const [value, setValue] = useState(initialValue)
  const [debouncedValue, setDebouncedValue] = useState(initialValue)

  // use ref to store the timer
  const timer = useRef<NodeJS.Timeout | null>(null)

  // declare set and delete param to/from the URL
  const setParam = (value: string) => {
    params.set(searchParamName, value)
    navigate({ search: params.toString() }, { state, replace: true })
  }
  const deleteParam = () => {
    params.delete(searchParamName)
    navigate({ search: params.toString() }, { state, replace: true })
  }

  // timeout callback function
  const setKeyword = (value: string) => {
    // set the url param
    if (value === '') deleteParam()
    else setParam(value)

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
  const changeHandler = (value: string) => {
    setValue(value)
    const time = value.trim() === '' ? 0 : SEARCH_TIME

    if (timer.current === null) {
      // set the timeout
      timer.current = setTimeout(() => setKeyword(value.trim()), time)
    } else {
      // refresh the timer
      clearTimeout(timer.current)
      timer.current = setTimeout(() => setKeyword(value.trim()), time)
    }
  }

  useEffect(() => {
    if (searchParamValue === null) {
      setDebouncedValue('')
      setValue('')
    }
  }, [searchParamValue])

  return { value, debouncedValue, changeHandler }
}

export const useTabParam = (
  tabs?: ITabObject[],
  index?: string | number,
  onChange?: (value: URLSearchParams) => void
) => {
  const navigate = useNavigate()
  const { search, state } = useLocation()
  const tabParamName = getTabParamName(index)
  const params = useMemo(() => new URLSearchParams(search), [search])
  const tabParamValue = params.get(tabParamName)
  const initialValue =
    tabParamValue !== null ? tabParamValue : tabs ? tabs[0]?.key : ''

  const [selectedTab, setSelectedTab] =
    useState<ITabObject['key']>(initialValue)

  // declare set and delete param to/from the URL
  const setParam = (value: string) => {
    params.set(tabParamName, encodeURIComponent(value))
    if (onChange) onChange(params)
    navigate({ search: params.toString() }, { state, replace: true })
  }

  const onTabChangeHandler = (tabId: ITabObject['key']) => {
    setSelectedTab(tabId)
    setParam(tabId)
  }
  return { selectedTab, onTabChangeHandler }
}

function getTabParamName(index?: string | number) {
  return getParamName('tab', index)
}

function getCurrentPageParamName(index?: string | number) {
  return getParamName('currentPage', index)
}
function getResultsPerPageParamName(index?: string | number) {
  return getParamName('resultsPerPage', index)
}

function getSearchParamName(index?: string | number) {
  return getParamName('keyword', index)
}
