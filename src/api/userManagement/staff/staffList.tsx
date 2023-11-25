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
import { IStaffListEndpoint } from '.'
import { axiosClient } from '@/api/clients'

const key = 'staffList'
type Response = IResponse<WithStats<WithPagination<IStaffListEndpoint>>>
export type Variables = IPaginationParams & ISearchParams

// TODO add table filters
const getStaffList: AxiosFn<Variables, Response> = async (
  { page, per_page },
  signal
) => {
  const { data } = await axiosClient.get('/users/staff', {
    params: { per_page, page },
    signal
  })
  return data
}

export const useStaffList = createQuery<Response, Variables, AxiosError>({
  primaryKey: key,
  queryFn: ({ queryKey: [_primaryKey, variables], signal }) =>
    getStaffList(variables, signal)
})
