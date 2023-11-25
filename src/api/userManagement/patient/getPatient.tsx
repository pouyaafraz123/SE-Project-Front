import { AxiosFn, AxiosError, IResponse } from '@api/types'
import { createQuery } from 'react-query-kit'
import { getUser } from '@api/user'
import { IPatientDetailEndpoint } from './types'
import { generatePath } from '@/routes/generatePath'
import { axiosClient } from '@/api/clients'

const key = 'doctorUser'
type Response = IResponse<IPatientDetailEndpoint>
type Variables = { id: string }

export const getPatient: AxiosFn<Variables, Response> = async (
  params,
  signal
) => {
  const { data } = await axiosClient.get(
    generatePath('/users/patient/:id', { id: params.id.toString() }),
    {
      signal
    }
  )
  return data
  // return getUser(params, signal)
}

export const usePatient = createQuery<Response, Variables, AxiosError>({
  primaryKey: key,
  queryFn: ({ queryKey: [_primaryKey, variables], signal }) =>
    getPatient(variables, signal)
})
