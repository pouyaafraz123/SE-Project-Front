import { TTableBodyProps } from '@components/organisms/pageTable'
import { RowData } from '@tanstack/react-table'
import { useMemo } from 'react'
import { Table } from '@components/organisms/table'
import clsx from 'clsx'
import { TableNoData } from '@components/atoms/tableNoData'
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
      {!isBasic &&
        !isCustom &&
        (total > 0 ? (
          <div
            className={clsx(
              type === 'row' && classes.pageTable__gridRow,
              type === 'grid' && classes.pageTable__gridTable
            )}
          >
            {children}
          </div>
        ) : (
          <TableNoData />
        ))}
      {!isBasic && isCustom ? (
        total > 0 ? (
          <>{children}</>
        ) : (
          <TableNoData />
        )
      ) : (
        <></>
      )}
    </>
  )
}
