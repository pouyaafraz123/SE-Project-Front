import { AxiosFn, AxiosError, IResponse, WithPagination } from '@api/types'
import { createQuery } from 'react-query-kit'
import { IDoctorAdminListEndpoint } from '.'
import { axiosClient } from '@/api/clients'

const key = 'doctorAdminList'
type Response = IResponse<WithPagination<IDoctorAdminListEndpoint>>
export type Variables = { page: number; per_page: number }

// TODO add table filters
const getDoctorAdminList: AxiosFn<Variables, Response> = async (
  { page, per_page },
  signal
) => {
  const { data } = await axiosClient.get('/userManagements/doctorAdminList', {
    params: { per_page, page },
    signal
  })
  return data
}

export const useDoctorAdminList = createQuery<Response, Variables, AxiosError>({
  primaryKey: key,
  queryFn: ({ queryKey: [_primaryKey, variables], signal }) =>
    getDoctorAdminList(variables, signal)
})
