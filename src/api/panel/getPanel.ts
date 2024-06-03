import { AxiosError, AxiosResponse } from 'axios'
import { createQuery } from 'react-query-kit'
import { IPanel } from './types'
import { axiosClient, AxiosFn, IPaginationParams, WithPagination } from '@/api'

type Variables = IPaginationParams
type Response = AxiosResponse<WithPagination<IPanel>>

const key = 'panels'

export const getPanels: AxiosFn<Variables, Response> = async (
  params,
  signal
) => {
  return await axiosClient.get('/panels', { params, signal })
}

export const usePanels = createQuery<Response, Variables, AxiosError>({
  primaryKey: key,
  queryFn: ({ queryKey: [_primaryKey, variables], signal }) =>
    getPanels(variables, signal),
  retry(_failureCount, error) {
    return error.code != AxiosError.ERR_BAD_REQUEST
  },
  keepPreviousData: true
})
