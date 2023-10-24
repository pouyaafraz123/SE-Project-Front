import { ReactNode } from 'react'

export interface PaginationButtonProps {
  children: ReactNode
  status?: 'default' | 'active' | 'disabled'
  onClick: () => void
}
