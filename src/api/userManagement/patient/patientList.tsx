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
import { IPatientListEndpoint } from '.'
import { axiosClient } from '@/api/clients'

const key = 'patientList'
type Response = IResponse<WithStats<WithPagination<IPatientListEndpoint>>>
export type Variables = IPaginationParams & ISearchParams

// TODO add table filters
const getPatientList: AxiosFn<Variables, Response> = async (params, signal) => {
  const { data } = await axiosClient.get('/users/patient', {
    params,
    signal
  })
  return data
}

export const usePatientList = createQuery<Response, Variables, AxiosError>({
  primaryKey: key,
  queryFn: ({ queryKey: [_primaryKey, variables], signal }) =>
    getPatientList(variables, signal)
})
