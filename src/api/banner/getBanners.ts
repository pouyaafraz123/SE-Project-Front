import { AxiosError, AxiosResponse } from 'axios'
import { createQuery } from 'react-query-kit'
import { IBanner } from '.'
import { axiosClient, AxiosFn, IPaginationParams, WithPagination } from '@/api'

type Variables = IPaginationParams
type Response = AxiosResponse<WithPagination<IBanner>>

const key = 'banner-table'

export const getBannerTable: AxiosFn<Variables, Response> = async (
  params,
  signal
) => {
  return await axiosClient.get('/panels/banners', { params, signal })
}

export const useBannerTable = createQuery<Response, Variables, AxiosError>({
  primaryKey: key,
  queryFn: ({ queryKey: [_primaryKey, variables], signal }) =>
    getBannerTable(variables, signal),
  retry(_failureCount, error) {
    return error.code != AxiosError.ERR_BAD_REQUEST
  },
  keepPreviousData: true
})
