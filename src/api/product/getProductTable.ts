import {
  IProductTableEndpoint,
  IProductTableParams
} from '@api/product/types.ts'
import { AxiosError, AxiosResponse } from 'axios'
import { createQuery } from 'react-query-kit'
import { axiosClient, AxiosFn, IPaginationParams, WithPagination } from '@/api'

type Variables = IProductTableParams & IPaginationParams
type Response = AxiosResponse<WithPagination<IProductTableEndpoint>>

const key = 'product-table'

export const getProductTable: AxiosFn<Variables, Response> = async (
  params,
  signal
) => {
  return await axiosClient.get('/products', { params, signal })
}

export const useProductTable = createQuery<Response, Variables, AxiosError>({
  primaryKey: key,
  queryFn: ({ queryKey: [_primaryKey, variables], signal }) =>
    getProductTable(variables, signal),
  retry(_failureCount, error) {
    return error.code != AxiosError.ERR_BAD_REQUEST
  },
  keepPreviousData: true
})
