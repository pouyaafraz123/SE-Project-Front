import { useMemo } from 'react'
import { RowData } from '@tanstack/react-table'
import clsx from 'clsx'
import styles from './styles.module.scss'

import { Thead } from './thead/thead'
import { Tbody } from './tbody/tbody'
import { TableProps } from './types'

/**
 * TODO:add font and all typography
 */

export function Table<TData extends RowData>(props: TableProps<TData>) {
  const {
    columnDef,
    dataJSON,
    thead = true,
    showRow = true,
    hasActionCell = false,
    tableClassName,
    tableContainerClassName
  } = props
  const finalData = useMemo(() => dataJSON, [dataJSON])
  const finalColumnDef = useMemo(() => columnDef, [columnDef])
  const table = {
    columnDef: finalColumnDef,
    dataJSON: finalData
  }

  return (
    <div className={clsx([styles['table-container'], tableContainerClassName])}>
      <table className={clsx([styles.table, tableClassName])}>
        {thead && (
          <Thead
            table={table}
            hasActionCell={hasActionCell}
            showRow={showRow}
          />
        )}
        <Tbody table={table} hasActionCell={hasActionCell} showRow={showRow} />
      </table>
    </div>
  )
}
