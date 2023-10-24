import { IOption } from '@components/molecules/selectBox/types.ts'
import { IProps, OptType } from '@components/fastFields/fastSelect/types.ts'

export type TFilterVariants = 'basic' | 'timespan' | 'cost' | 'dropdown'

export interface IFilter {
  key: string
  title: string
  options: TFilterOption[]
  variant?: TFilterVariants
  dropdownType?: OptType //TODO FIX TYPING
}

export type TFilterOption = {
  key: string
  value: string
}

export interface IFilterValue {
  key: string
  title: string
  values: TFilterValueOption[]
}

// TODO THINK ABOUT TYPING
export type TFilterValueOption = {
  key: string
  value: string
  to?: Date
  from?: Date
  costFrom?: string
  costTo?: string
  dropdown?: IOption
}

export interface IFilterProps {
  options: IFilter[]
  value: IFilterValue[]
  containerClassname?: string
  contentClassname?: string
  onFilterSelect?: (filters: IFilterValue[]) => void
  /**
   * give a key or index for each input in a page. If you have more than a table in one page give each of them a key or index to prevent conflicting with each other.
   */
  index?: string | number
  setToUrl?: boolean
}

export interface IFilterSelectProps {
  index: number
  content: IFilter
  value: IFilterValue[]
  onFilterSelect?: (filters: IFilterValue[]) => void
  options: IFilter[]
}
