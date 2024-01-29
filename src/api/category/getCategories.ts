import { AxiosError, AxiosResponse } from 'axios'
import { createQuery } from 'react-query-kit'
import { ICategory } from '@api/category/types.ts'
import { axiosClient, AxiosFn, IPaginationParams, WithPagination } from '@/api'

type Variables = IPaginationParams
type Response = AxiosResponse<WithPagination<ICategory>>

const key = 'categories-all'

export const getCategories: AxiosFn<Variables, Response> = async (
  params,
  signal
) => {
  console.log('params', params)
  return await axiosClient.get('/panels/categories', { params, signal })
}

export const useCategories = createQuery<Response, Variables, AxiosError>({
  primaryKey: key,
  queryFn: ({ queryKey: [_primaryKey, variables], signal }) =>
    getCategories(variables, signal),
  retry(_failureCount, error) {
    return error.code != AxiosError.ERR_BAD_REQUEST
  },
  keepPreviousData: true
})
