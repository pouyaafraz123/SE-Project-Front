import { AxiosError, AxiosResponse } from 'axios'
import { createQuery } from 'react-query-kit'
import { IComments } from './types'
import { axiosClient, AxiosFn, IPaginationParams, WithPagination } from '@/api'

type Variables = IPaginationParams & { id: string }
type Response = AxiosResponse<WithPagination<IComments>>

const key = 'comment-table'

export const getComments: AxiosFn<Variables, Response> = async (
  params,
  signal
) => {
  return await axiosClient.get(`/products/${params.id}/reviews`, {
    params,
    signal
  })
}

export const useComments = createQuery<Response, Variables, AxiosError>({
  primaryKey: key,
  queryFn: ({ queryKey: [_primaryKey, variables], signal }) =>
    getComments(variables, signal),
  retry(_failureCount, error) {
    return error.code != AxiosError.ERR_BAD_REQUEST
  },
  keepPreviousData: true
})
