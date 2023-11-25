import { AxiosFn, AxiosError, IResponse } from '@api/types'
import { createQuery } from 'react-query-kit'
import { generatePath } from 'react-router-dom'
import { IDoctorDetailEndpoint } from './types'
import { axiosClient } from '@/api/clients'
import { getUser } from '@/api/user'

const key = 'doctorUser'
type Response = IResponse<IDoctorDetailEndpoint>
type Variables = { id: string }

export const getDoctor: AxiosFn<Variables, Response> = async (
  params,
  signal
) => {
  const { data } = await axiosClient.get(
    generatePath('/users/doctor/:id', { id: params.id.toString() }),
    {
      signal
    }
  )
  return data
  // return getUser(params, signal)
}

export const useDoctor = createQuery<Response, Variables, AxiosError>({
  primaryKey: key,
  queryFn: ({ queryKey: [_primaryKey, variables], signal }) =>
    getDoctor(variables, signal)
})
