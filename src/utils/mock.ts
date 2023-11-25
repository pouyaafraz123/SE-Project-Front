import { WithPagination, WithStats, WithInfinite } from '@api/types'
import { IStats } from '@/interfaces'

/**
 * wraps data with pagination info (used in mock files)
 * @param list table data
 * @param page page number
 * @param pageSize items per page
 */
function withPage<T>(
  list: T[],
  page: number,
  pageSize: number
): WithPagination<T> {
  return {
    page: {
      pageNumber: page,
      pageSize: pageSize,
      total: list.length,
      list: list.slice((page - 1) * pageSize, page * pageSize)
    }
  }
}

export function withInfinite<T>(
  list: T[],
  cursor: number,
  amount: number = 10
): WithInfinite<T> {
  return {
    list: list.slice(cursor, cursor + amount),
    nextCursor: list.length > cursor + amount ? cursor + amount : undefined
  }
}

/**
 * returns the specified slice of data (used in stories)
 * @param list table data
 * @param page page number
 * @param pageSize items per page
 */
export function getPage<T>(list: T[], page: number, pageSize: number): T[] {
  return list.slice((page - 1) * pageSize, page * pageSize)
}

function withStats<T>(data: T, stats: IStats[]): WithStats<T> {
  return {
    statistics: stats,
    ...data
  }
}

const withRes = (data: unknown) => {
  return { data: data, message: '' }
}

const baseURL = import.meta.env.VITE_API_BASE_URL

export const mockUtils = {
  getPage,
  withPage,
  withRes,
  withStats,
  baseURL,
  withInfinite
}
