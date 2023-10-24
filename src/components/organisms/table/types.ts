import { ReactNode } from 'react'
import { ColumnDef } from '@tanstack/react-table'

export interface TableProps {
  thead?: boolean
  pagination?: ReactNode
  // https://github.com/TanStack/table/issues/4382#issuecomment-1301298389
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columnDef: ColumnDef<any, any>[]
  dataJSON: unknown[]
}
