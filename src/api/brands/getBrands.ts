import { AxiosError, AxiosResponse } from 'axios'
import { createQuery } from 'react-query-kit'
import { IBrands } from '@api/brands/types.ts'
import { axiosClient, AxiosFn, IPaginationParams, WithPagination } from '@/api'

type Variables = IPaginationParams
type Response = AxiosResponse<WithPagination<IBrands>>

const key = 'brand-table'

export const getBrands: AxiosFn<Variables, Response> = async (
  params,
  signal
) => {
  return await axiosClient.get('/panels/brands', { params, signal })
}

export const useBrands = createQuery<Response, Variables, AxiosError>({
  primaryKey: key,
  queryFn: ({ queryKey: [_primaryKey, variables], signal }) =>
    getBrands(variables, signal),
  retry(_failureCount, error) {
    return error.code != AxiosError.ERR_BAD_REQUEST
  },
  keepPreviousData: true
})
