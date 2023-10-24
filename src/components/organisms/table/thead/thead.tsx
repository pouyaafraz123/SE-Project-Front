import {
  useReactTable,
  flexRender,
  getCoreRowModel
} from '@tanstack/react-table'
import styles from '../styles.module.scss'
import { useTableContext } from '../tableContext'

export function Thead() {
  const { table } = useTableContext()
  const tableInstance = useReactTable({
    columns: table.columnDef,
    data: table.dataJSON,
    getCoreRowModel: getCoreRowModel()
  })

  return (
    <thead className={styles.thead}>
      {tableInstance.getHeaderGroups().map((headerEl) => {
        return (
          <tr key={headerEl.id}>
            {headerEl.headers.map((columnEl) => {
              return (
                <th
                  key={columnEl.id}
                  colSpan={columnEl.colSpan}
                  className={styles.th}
                >
                  {flexRender(
                    columnEl.column.columnDef.header,
                    columnEl.getContext()
                  )}
                </th>
              )
            })}
          </tr>
        )
      })}
    </thead>
  )
}
