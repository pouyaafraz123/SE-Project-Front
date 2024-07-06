import { AxiosError, AxiosResponse } from 'axios'
import { createQuery } from 'react-query-kit'
import { IUserParams, IUsers } from '@api/users/types.ts'
import { axiosClient, AxiosFn, IPaginationParams, WithPagination } from '@/api'

type Variables = IUserParams & IPaginationParams & { panelGuid: string }
type Response = AxiosResponse<WithPagination<IUsers>>

const key = 'users-table'

export const getUserTable: AxiosFn<Variables, Response> = async (
  params,
  signal
) => {
  return await axiosClient.get('/panels/members', { params, signal })
}

export const useUserTable = createQuery<Response, Variables, AxiosError>({
  primaryKey: key,
  queryFn: ({ queryKey: [_primaryKey, variables], signal }) =>
    getUserTable(variables, signal),
  retry(_failureCount, error) {
    return error.code != AxiosError.ERR_BAD_REQUEST
  },
  keepPreviousData: true
})
