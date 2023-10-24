import { ColumnDef } from '@tanstack/react-table'
import { createContext, useContext } from 'react'

interface Table {
  // https://github.com/TanStack/table/issues/4382#issuecomment-1301298389
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columnDef: ColumnDef<any, any>[]
  dataJSON: unknown[]
}

const TableContext = createContext<{ table: Table } | null>(null)

export function useTableContext() {
  const context = useContext(TableContext)

  if (!context) {
    throw new Error(
      'Table.* component must be rendered as child of Table component'
    )
  }
  return context
}

export default TableContext
