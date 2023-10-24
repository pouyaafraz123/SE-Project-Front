import { AxiosFn, AxiosError, IResponse, WithPagination } from '@api/types'
import { createQuery } from 'react-query-kit'
import { IHealthFacilityTable } from './types'
import { axiosClient } from '@/api/clients'

const key = 'hfTable'
type Response = IResponse<WithPagination<IHealthFacilityTable>>
export type Variables = { page: number; per_page: number }

// TODO add table filters
export const getHFTable: AxiosFn<Variables, Response> = async (
  { page, per_page },
  signal
) => {
  const { data } = await axiosClient.get('/facilities', {
    params: { per_page, page },
    signal
  })
  return data
}

export const useHFTable = createQuery<Response, Variables, AxiosError>({
  primaryKey: key,
  queryFn: ({ queryKey: [_primaryKey, variables], signal }) =>
    getHFTable(variables, signal),
  retry(_failureCount, error) {
    if (error.code == AxiosError.ERR_BAD_REQUEST) return false
    return true
  }
})
