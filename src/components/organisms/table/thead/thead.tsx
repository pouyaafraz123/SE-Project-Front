import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  RowData
} from '@tanstack/react-table'
import { ITableChildProps } from '@components/organisms/table/types.ts'
import { useTranslation } from 'react-i18next'
import styles from '../styles.module.scss'

export function Thead<TData extends RowData>({
  table,
  showRow
}: ITableChildProps<TData>) {
  const { t } = useTranslation('common')

  const tableInstance = useReactTable<TData>({
    columns: table.columnDef,
    data: table.dataJSON,
    getCoreRowModel: getCoreRowModel()
  })

  return (
    <thead className={styles.thead}>
      {tableInstance?.getHeaderGroups()?.map((headerEl, index) => {
        return (
          <tr key={headerEl.id + 'index' + index}>
            {showRow && <th>{t('row')}</th>}
            {headerEl.headers.map((columnEl, index2) => {
              return (
                <th
                  key={columnEl.id + 'index2' + index2}
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
