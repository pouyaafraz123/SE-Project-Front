import { PropsWithChildren, ReactNode } from 'react'
import { ITabObject } from '@components/molecules/headerTabGroup'
import { IFilter, IFilterProps } from '@components/molecules/filter'
import { ITableSearchProps } from '@components/molecules/tableSearch'
import { TableProps } from '@components/organisms/table/types.ts'
import { RowData } from '@tanstack/react-table'

export type TPageTableProps<TData extends RowData> = ITableBasicProps &
  TTableConditionalProps<TData> &
  TTableData &
  TPagination

export type TPageTableParamProps = ITableFilterSearchProps &
  TPagination & { tabProps?: ITableTabProps }

export interface ITableBasicProps
  extends ITableHeadingProps,
    ITableFilterSearchProps {
  type: TTableType
  isFetching?: boolean
  index?: number
  isLoading?: boolean
}

export type TTableType = 'basic' | 'row' | 'grid' | 'custom'

export interface ITableContainerProps extends PropsWithChildren {}

export interface ITableHeadProps {
  headingProps: ITableHeadingProps
  tableFilterSearchProps?: ITableFilterSearchProps
}
export interface ITableHeadingProps {
  title: string
  tabProps?: ITableTabProps
  onDownload?: () => void
  onPrint?: () => void
  noDownload?: boolean
  noPrint?: boolean
}

export interface ITableTabProps {
  tabs: ITabObject[]
  selectedKey: string
  onChange: (selectedTabId: string) => void
}

export interface ITableFilterSearchProps {
  filterProps?: IFilterProps
  searchProps?: ITableSearchProps
  actions?: ReactNode
}

export type TTableConditionalProps<TData extends RowData> =
  | {
      type: 'basic'
      tableProps: TableProps<TData>
      children?: undefined
    }
  | {
      type: 'row' | 'grid' | 'custom'
      tableProps?: never
      children: ReactNode
    }

export type TTableBodyProps<TData extends RowData> =
  TTableConditionalProps<TData> & TTableData

export type TTableBottomProps = TPagination & TTableData

export type TTableData = {
  total: number | undefined
}

export type TPagination = {
  pagination?: {
    page?: number | undefined
    per_page?: number | undefined
    onPageChange: (page: number) => void
    onResultPerPageChange: (perPage: number) => void
  }
}

export interface IUseTableParams {
  index?: number
  filters?: IFilter[]
  tabs?: ITabObject[]
}

export interface ITablePageNumberProps {
  page: number
  per_page: number
  total: number
}

export interface ITablePerPageSelectorProps {
  per_page: number
  onResultPerPageChange: (perPage: number) => void
}
