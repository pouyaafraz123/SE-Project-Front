import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  RowData
} from '@tanstack/react-table'
import { ITableChildProps } from '@components/organisms/table/types.ts'
import clsx from 'clsx'
import styles from '../styles.module.scss'

export function Tbody<TData extends RowData>({
  table,
  showRow,
  hasActionCell
}: ITableChildProps<TData>) {
  const tableInstance = useReactTable<TData>({
    columns: table.columnDef,
    data: table.dataJSON,
    getCoreRowModel: getCoreRowModel()
  })
  return (
    <tbody
      className={clsx([
        styles.tbody,
        showRow && styles.rowCell,
        hasActionCell && styles.actionCell
      ])}
    >
      {tableInstance?.getCoreRowModel()?.rows?.map((rowEl, index) => {
        return (
          <tr key={rowEl.id + 'index' + index} className={styles.tr}>
            {showRow && (
              <td className={styles.td}>
                <div className={styles.cell}>{index + 1}</div>
              </td>
            )}
            {rowEl.getVisibleCells().map((cellEl, index2) => {
              return (
                <td key={cellEl.id + 'index2' + index2} className={styles.td}>
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
