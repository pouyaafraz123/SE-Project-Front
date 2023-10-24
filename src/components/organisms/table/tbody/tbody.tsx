import {
  useReactTable,
  flexRender,
  getCoreRowModel
} from '@tanstack/react-table'
import styles from '../styles.module.scss'
import { useTableContext } from '../tableContext'

export function Tbody() {
  const { table } = useTableContext()
  const tableInstance = useReactTable({
    columns: table.columnDef,
    data: table.dataJSON,
    getCoreRowModel: getCoreRowModel()
  })
  return (
    <tbody className={styles.tbody}>
      {tableInstance.getCoreRowModel().rows.map((rowEl) => {
        return (
          <tr key={rowEl.id} className={styles.tr}>
            {rowEl.getVisibleCells().map((cellEl) => {
              return (
                <td key={cellEl.id} className={styles.td}>
                  <div className={styles.cell}>
                    {flexRender(
                      cellEl.column.columnDef.cell,
                      cellEl.getContext()
                    )}
                  </div>
                </td>
              )
            })}
          </tr>
        )
      })}
    </tbody>
  )
}
