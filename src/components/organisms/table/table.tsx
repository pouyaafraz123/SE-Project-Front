import { useMemo } from 'react'
import styles from './styles.module.scss'

import { Thead } from './thead/thead'
import { Tbody } from './tbody/tbody'
import TableContext from './tableContext'
import { TableProps } from './types'

/**
 * TODO:
 * add font and all typography
 */

export function Table(props: TableProps) {
  const { columnDef, dataJSON, thead = true, pagination } = props
  const finalData = useMemo(() => dataJSON, [dataJSON])
  const finalColumnDef = useMemo(() => columnDef, [columnDef])
  const table = {
    columnDef: finalColumnDef,
    dataJSON: finalData
  }

  return (
    <TableContext.Provider value={{ table }}>
      <table className={styles.table}>
        {thead && <Thead />}
        <Tbody />
      </table>
      {pagination && pagination}
    </TableContext.Provider>
  )
}
