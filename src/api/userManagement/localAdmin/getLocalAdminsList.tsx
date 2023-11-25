import {
  AxiosFn,
  AxiosError,
  IResponse,
  WithPagination,
  WithStats
} from '@api/types'
import { createQuery } from 'react-query-kit'
import { ILocalAdminListEndpoint } from '.'
import { axiosClient } from '@/api/clients'

const key = 'localAdminList'
type Response = IResponse<WithStats<WithPagination<ILocalAdminListEndpoint>>>
export type Variables = { page: number; per_page: number }

// TODO add table filters
const getLocalAdminList: AxiosFn<Variables, Response> = async (
  { page, per_page },
  signal
) => {
  const { data } = await axiosClient.get('/users/local-admin', {
    params: { per_page, page },
    signal
  })
  return data
}

export const useLocalAdminList = createQuery<Response, Variables, AxiosError>({
  primaryKey: key,
  queryFn: ({ queryKey: [_primaryKey, variables], signal }) =>
    getLocalAdminList(variables, signal)
})
