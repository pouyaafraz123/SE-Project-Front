import { Pagination } from '@components/molecules/pagination'
import {
  TablePageNumber,
  TablePerPageSelector,
  TTableBottomProps
} from '@components/organisms/pageTable'
import { useMemo } from 'react'
import clsx from 'clsx'
import classes from '../../styles.module.scss'

export function TableBottom({ pagination, total = 0 }: TTableBottomProps) {
  const page = pagination?.page || 1
  const perPage = pagination?.per_page || 10

  const totalPages = useMemo(
    () => calculateTotalPages(total, perPage),
    [perPage, total]
  )

  return (
    <>
      {pagination && (
        <div className={clsx(classes.pageTable__tableBottom)}>
          <TablePerPageSelector
            per_page={perPage}
            onResultPerPageChange={pagination?.onResultPerPageChange}
          />
          <Pagination
            totalPages={totalPages}
            currentPage={page}
            perPage={perPage}
            onPageChange={(page) => {
              pagination?.onPageChange?.(page)
            }}
            onPerPageChange={(perPage) => {
              pagination?.onResultPerPageChange?.(perPage)
            }}
          />
          <TablePageNumber page={page} per_page={perPage} total={total} />
        </div>
      )}
    </>
  )
}

function calculateTotalPages(
  totalDataCount: number,
  itemsPerPage: number
): number {
  if (totalDataCount <= 0 || itemsPerPage <= 0) {
    return 0 // Return 0 pages for invalid input.
  }

  return Math.ceil(totalDataCount / itemsPerPage)
}
