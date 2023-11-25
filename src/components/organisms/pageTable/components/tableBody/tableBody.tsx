import { TTableBodyProps } from '@components/organisms/pageTable'
import { RowData } from '@tanstack/react-table'
import { useMemo } from 'react'
import { Table } from '@components/organisms/table'
import { Pagination } from '@components/molecules/pagination'
import clsx from 'clsx'
import classes from '../../styles.module.scss'

export function TableBody<TData extends RowData>({
  type,
  tableProps,
  children,
  total = 0
}: TTableBodyProps<TData>) {
  const isBasic = useMemo(() => type === 'basic', [type])
  const isCustom = useMemo(() => type === 'custom', [type])

  return (
    <>
      {isBasic && tableProps && <Table showRow={false} {...tableProps} />}
      {!isBasic && !isCustom && (
        <div
          className={clsx(
            type === 'row' && classes.pageTable__gridRow,
            type === 'grid'
          )}
        >
          {children}
        </div>
      )}
      {!isBasic && isCustom && <>{children}</>}
    </>
  )
}
