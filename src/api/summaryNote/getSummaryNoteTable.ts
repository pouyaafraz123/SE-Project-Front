import { IAppointmentTableEndpoint } from '@api/appointment'
import { createQuery } from 'react-query-kit'
import {
  axiosClient,
  AxiosError,
  AxiosFn,
  IPaginationParams,
  IResponse,
  ISearchParams,
  WithPagination
} from '@/api'

const key = 'summary-note-table'

type Response = IResponse<WithPagination<IAppointmentTableEndpoint>>
export type Variables = IPaginationParams & ISearchParams

export const getSummaryNoteTable: AxiosFn<Variables, Response> = async (
  params,
  signal
) => {
  const { data } = await axiosClient.get('/visit-summary-notes', {
    params,
    signal
  })
  return data
}

export const useSummaryNoteTable = createQuery<Response, Variables, AxiosError>(
  {
    primaryKey: key,
    queryFn: ({ queryKey: [_primaryKey, variables], signal }) =>
      getSummaryNoteTable(variables, signal),
    retry(_failureCount, error) {
      return error.code != AxiosError.ERR_BAD_REQUEST
    }
  }
)
