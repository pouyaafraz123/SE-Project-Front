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
import { IUsersListEndpoint } from '.'
import { axiosClient } from '@/api/clients'

const key = 'usersList'
type Response = IResponse<WithStats<WithPagination<IUsersListEndpoint>>>
export type Variables = IPaginationParams & ISearchParams

// TODO add table filters
const getUsersList: AxiosFn<Variables, Response> = async (params, signal) => {
  const { data } = await axiosClient.get('/users', {
    params,
    signal
  })
  return data
}

export const useUsersList = createQuery<Response, Variables, AxiosError>({
  primaryKey: key,
  queryFn: ({ queryKey: [_primaryKey, variables], signal }) =>
    getUsersList(variables, signal)
})
