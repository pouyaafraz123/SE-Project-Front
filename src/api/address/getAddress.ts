import { AxiosError, AxiosResponse } from 'axios'
import { createQuery } from 'react-query-kit'
import { IAddress, IAddressGetParams } from '@api/address/types.ts'
import { axiosClient, AxiosFn, IPaginationParams, WithPagination } from '@/api'

type Variables = IPaginationParams & IAddressGetParams
type Response = AxiosResponse<WithPagination<IAddress>>

const key = 'addresses'

export const getAddresses: AxiosFn<Variables, Response> = async (
  params,
  signal
) => {
  return await axiosClient.get('/users/addresses', { params, signal })
}

export const useAddresses = createQuery<Response, Variables, AxiosError>({
  primaryKey: key,
  queryFn: ({ queryKey: [_primaryKey, variables], signal }) =>
    getAddresses(variables, signal),
  retry(_failureCount, error) {
    return error.code != AxiosError.ERR_BAD_REQUEST
  },
  keepPreviousData: true
})
