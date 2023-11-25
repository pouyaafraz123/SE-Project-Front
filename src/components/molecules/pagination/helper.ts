import { TGetPagesParams } from '@components/molecules/pagination/types.ts'

export const getPageNumbers = ({
  totalPages,
  currentPage
}: TGetPagesParams) => {
  const pageNumbers: (string | number)[] = []
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
