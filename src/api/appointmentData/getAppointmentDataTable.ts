import { createQuery } from 'react-query-kit'
import {
  IAppointmentDataParams,
  IAppointmentDataTableEndpoint
} from '@api/appointmentData'
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

const key = 'appointment-data-table'

type Response = IResponse<
  WithStats<WithPagination<IAppointmentDataTableEndpoint>>
>
export type Variables = IPaginationParams &
  ISearchParams &
  IAppointmentDataParams

// TODO FIX URL
export const getAppointmentDataTable: AxiosFn<Variables, Response> = async (
  params,
  signal
) => {
  const { data } = await axiosClient.get('/appointments-data', {
    params,
    signal
  })
  return data
}

export const useAppointmentDataTable = createQuery<
  Response,
  Variables,
  AxiosError
>({
  primaryKey: key,
  queryFn: ({ queryKey: [_primaryKey, variables], signal }) =>
    getAppointmentDataTable(variables, signal),
  retry(_failureCount, error) {
    return error.code != AxiosError.ERR_BAD_REQUEST
  }
})
