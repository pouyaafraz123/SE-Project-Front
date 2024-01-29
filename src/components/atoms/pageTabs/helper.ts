import { ITabObject } from '@components/molecules/headerTabGroup'
import { useLocation, useNavigate } from 'react-router-dom'
import { useMemo, useState } from 'react'
import { getParamName } from '@components/molecules/filter'
import { IPageTabsProps } from '@components/atoms/pageTabs/types.ts'

export const usePageTabParam = <T extends string = string>(
  tabs: ITabObject<T>[],
  index?: string | number,
  onChange?: (value: URLSearchParams) => void
): IPageTabsProps<T> => {
  const navigate = useNavigate()
  const { search, state } = useLocation()
  const tabParamName = getPageTabParamName(index)
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
  return {
    tabs: tabs as ITabObject<T>[],
    onChange: onTabChangeHandler,
    selectedKey: selectedTab as T
  }
}

function getPageTabParamName(index?: string | number) {
  return getParamName('page-tab', index)
}
