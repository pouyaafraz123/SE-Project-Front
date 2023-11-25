import { ReactNode } from 'react'
import { ColumnDef, RowData, ColumnDefBase } from '@tanstack/react-table'
import { HfTypes, IOption } from '@/interfaces'

export interface TableProps<TData extends RowData>
  extends TableBodyProps,
    Table<TData> {
  thead?: boolean
}

export interface Table<TData extends RowData> {
  columnDef: ColumnDef<TData, any>[]
  dataJSON: TData[]
}

export interface ITableChildProps<TData extends RowData>
  extends TableBodyProps {
  table: Table<TData>
}
export interface TableBodyProps {
  /**
   * Determines whether or not to show the row. By default, this value is `true`.
   */
  showRow?: boolean
  /**
   * Determines whether or not the last column is the action column. By default, this value is `true`.
   *
   * If set to `true`, the last column will have a fixed width.
   *
   */
  hasActionCell?: boolean
  tableContainerClassName?: string
  tableClassName?: string
}
