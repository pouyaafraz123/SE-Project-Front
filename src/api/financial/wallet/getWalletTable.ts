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
import { IPaientWalletTableEndpoint } from './types'
import { axiosClient } from '@/api/clients'

const key = 'walletTable'
type Response = IResponse<WithStats<WithPagination<IPaientWalletTableEndpoint>>>
type Variables = IPaginationParams & ISearchParams

export const getWalletTable: AxiosFn<Variables, Response> = async (
  params,
  signal
) => {
  const { data } = await axiosClient.get('/wallets', {
    params,
    signal
  })
  return data
}

export const useWalletTable = createQuery<Response, Variables, AxiosError>({
  primaryKey: key,
  queryFn: ({ queryKey: [_primaryKey, variables], signal }) =>
    getWalletTable(variables, signal)
})
