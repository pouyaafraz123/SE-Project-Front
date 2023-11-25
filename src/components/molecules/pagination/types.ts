export interface IPaginationProps {
  totalPages: number
  currentPage: number
  onPageChange: (page: number) => void
  perPage: number
  onPerPageChange: (page: number) => void
}

export type TGetPagesParams = Omit<
  IPaginationProps,
  'onPageChange' | 'onPerPageChange' | 'perPage'
>
