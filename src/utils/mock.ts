import { WithPagination } from '@api/types'

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
    page: page,
    pageSize: pageSize,
    total: list.length,
    list: list.slice((page - 1) * pageSize, page * pageSize)
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

const withRes = (data: unknown) => {
  return { data: data, message: '' }
}
const baseURL = import.meta.env.VITE_API_BASE_URL

export const mockUtils = { getPage, withPage, withRes, baseURL }
