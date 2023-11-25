import {
  AxiosFn,
  AxiosError,
  IResponse,
  WithPagination,
  WithStats,
  IPaginationParams,
  ISearchParams
} from '@api/types'
import { createQuery } from 'react-query-kit'
import { IHealthFacilityTable } from './types'
import { axiosClient } from '@/api/clients'

const key = 'hfTable'
type Response = IResponse<WithStats<WithPagination<IHealthFacilityTable>>>
export type Variables = IPaginationParams & ISearchParams

// TODO add table filters
export const getHFTable: AxiosFn<Variables, Response> = async (
  params,
  signal
) => {
  const { data } = await axiosClient.get('/facilities', {
    params,
    signal
  })
  return data
}

export const useHFTable = createQuery<Response, Variables, AxiosError>({
  primaryKey: key,
  queryFn: ({ queryKey: [_primaryKey, variables], signal }) =>
    getHFTable(variables, signal),
  retry(_failureCount, error) {
    return error.code != AxiosError.ERR_BAD_REQUEST
  }
})
