import { AxiosError, AxiosResponse } from 'axios'
import { createQuery } from 'react-query-kit'
import { ICart } from '@api/cart/types.ts'
import { axiosClient, AxiosFn, IPaginationParams, WithPagination } from '@/api'

type Variables = IPaginationParams
type Response = AxiosResponse<WithPagination<ICart>>

const key = 'cart-customer'

export const getCart: AxiosFn<Variables, Response> = async (params, signal) => {
  return await axiosClient.get('/users/cart', { params, signal })
}

export const useCart = createQuery<Response, Variables, AxiosError>({
  primaryKey: key,
  queryFn: ({ queryKey: [_primaryKey, variables], signal }) =>
    getCart(variables, signal),
  retry(_failureCount, error) {
    return error.code != AxiosError.ERR_BAD_REQUEST
  },
  keepPreviousData: true
})
