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
import { IDoctorListEndpoint } from '.'
import { axiosClient } from '@/api/clients'

const key = 'doctorList'
type Response = IResponse<WithStats<WithPagination<IDoctorListEndpoint>>>
export type Variables = IPaginationParams & ISearchParams

// TODO add table filters
const getDoctorList: AxiosFn<Variables, Response> = async (params, signal) => {
  const { data } = await axiosClient.get('/users/doctor', {
    params,
    signal
  })
  return data
}

export const useDoctorList = createQuery<Response, Variables, AxiosError>({
  primaryKey: key,
  queryFn: ({ queryKey: [_primaryKey, variables], signal }) =>
    getDoctorList(variables, signal)
})
