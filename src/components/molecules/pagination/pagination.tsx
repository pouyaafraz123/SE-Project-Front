import { PaginationProps } from './types'
import styles from './styles.module.scss'
import { PaginationButton } from '@/components/atoms/button/paginationButton'
import '../../../assets/icons/style.css'

function Pagination(props: PaginationProps) {
  const { totalPages, currentPage, onPageChange } = props

  const getPageNumbers = () => {
    const pageNumbers = []
    const visiblePages = 3 // Number of visible page numbers in the initial state
    if (totalPages <= visiblePages) {
      // If total pages are less than or equal to visible pages,
      // show all page numbers
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i)
      }
    } else {
      currentPage > totalPages - 3
        ? // Show first page, then ellipsis, and last four pages
          pageNumbers.push(
            1,
            '...',
            totalPages - 3,
            totalPages - 2,
            totalPages - 1,
            totalPages
          )
        : currentPage > 2
        ? // Show first page, then ellipsis, current page, one before
          // and one after current page, and last page
          pageNumbers.push(
            1,
            '...',
            currentPage - 1,
            currentPage,
            currentPage + 1,
            '...',
            totalPages
          )
        : // Show first 3 pages, then ellipsis, last page, and one before last
          pageNumbers.push(1, 2, 3, '...', totalPages - 1, totalPages)
    }
    return pageNumbers
  }

  return (
    <div className={styles.container}>
      {/** Prev Button */}
      <PaginationButton
        status={currentPage === 1 ? 'disabled' : 'default'}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <span className='icon-linear_arrow-right'></span>
        قبلی
      </PaginationButton>
      {/** Page Numbers  */}
      {getPageNumbers().map((pageNumber, index) =>
        pageNumber === '...' ? (
          <span key={index} className={styles.ellipsis}>
            ...
          </span>
        ) : (
          <PaginationButton
            key={index}
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
