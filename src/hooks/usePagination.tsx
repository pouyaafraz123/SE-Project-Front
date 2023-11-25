import { isDefinedNonZero } from '@utils'
import { useParams } from './useParams'

export function usePagination() {
  const params = useParams(['page', 'per-page'])
  const page = isDefinedNonZero(params.values.page) || 1
  const pageSize = isDefinedNonZero(params.values['per-page']) || 10 // TODO default value???
  function setPage(page: number, pageSize: number) {
    params.set({ page: String(page), 'per-page': String(pageSize) })
  }
  return { setPage, page, pageSize }
}
