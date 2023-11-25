import { createQuery } from 'react-query-kit'
import { IAppointmentTableEndpoint } from '@api/appointment'
import {
  axiosClient,
  AxiosError,
  AxiosFn,
  IPaginationParams,
  IResponse,
  ISearchParams,
  WithPagination,
  WithStats
} from '@/api'

const key = 'appointment-table'

type Response = IResponse<WithStats<WithPagination<IAppointmentTableEndpoint>>>
export type Variables = IPaginationParams & ISearchParams

// TODO FIX URL
export const getAppointmentTable: AxiosFn<Variables, Response> = async (
  params,
  signal
) => {
  const { data } = await axiosClient.get('/appointments', {
    params,
    signal
  })
  return data
}

export const useAppointmentTable = createQuery<Response, Variables, AxiosError>(
  {
    primaryKey: key,
    queryFn: ({ queryKey: [_primaryKey, variables], signal }) =>
      getAppointmentTable(variables, signal),
    retry(_failureCount, error) {
      return error.code != AxiosError.ERR_BAD_REQUEST
    }
  }
)
