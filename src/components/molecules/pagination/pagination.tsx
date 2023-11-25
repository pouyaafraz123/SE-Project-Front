import { getPageNumbers } from '@components/molecules/pagination/helper.ts'
import { useMemo } from 'react'
import { IPaginationProps } from './types'
import styles from './styles.module.scss'
import { PaginationButton } from '@/components/atoms/button/paginationButton'

// TODO Change Icons
function Pagination(props: IPaginationProps) {
  const { totalPages, currentPage, onPageChange } = props

  const pages = useMemo(() => {
    return getPageNumbers({ totalPages, currentPage })
  }, [currentPage, totalPages])

  return (
    <div className={styles.container}>
      {/** Prev Button */}
      <PaginationButton
        key={'prev'}
        status={currentPage === 1 ? 'disabled' : 'default'}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <span className='icon-linear_arrow-right'></span>
        قبلی
      </PaginationButton>
      {/** Page Numbers  */}
      {pages?.map((pageNumber) =>
        pageNumber === '...' ? (
          <span key={pageNumber} className={styles.ellipsis}>
            ...
          </span>
        ) : (
          <PaginationButton
            key={pageNumber}
            onClick={() =>
              typeof pageNumber === 'number' && onPageChange(pageNumber)
            }
            status={pageNumber === currentPage ? 'active' : 'default'}
          >
            {pageNumber}
          </PaginationButton>
        )
      )}
      {/** Next Button */}
      <PaginationButton
        key={'next'}
        status={currentPage === totalPages ? 'disabled' : 'default'}
        onClick={() => onPageChange(currentPage + 1)}
      >
        بعدی
        <span className='icon-linear_arrow-left'></span>
      </PaginationButton>
    </div>
  )
}

export { Pagination }
