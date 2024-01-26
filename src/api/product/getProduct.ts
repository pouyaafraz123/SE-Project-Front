import { AxiosError, AxiosResponse } from 'axios'
import { createQuery } from 'react-query-kit'
import { ID } from '@constants'
import { axiosClient, AxiosFn } from '@/api'
import { IProductEndpoint } from '@api/product/types.ts'

type Variables = { id: ID }
type Response = AxiosResponse<IProductEndpoint>

const key = 'product'

export const getProduct: AxiosFn<Variables, Response> = async (
  { id },
  signal
) => {
  return await axiosClient.get(`/products/${id}`, { signal })
}

export const useProduct = createQuery<Response, Variables, AxiosError>({
  primaryKey: key,
  queryFn: ({ queryKey: [_primaryKey, variables], signal }) =>
    getProduct(variables, signal),
  retry(_failureCount, error) {
    return error.code != AxiosError.ERR_BAD_REQUEST
  }
})
