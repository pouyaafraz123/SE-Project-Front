import { AxiosError, AxiosFn } from '@api/types'
import { createQuery } from 'react-query-kit'
import { generatePath } from 'react-router-dom'
import { AxiosResponse } from 'axios'
import { IProfileEndpoint } from './types'
import { axiosClient } from '@/api/clients'

const key = 'profile'
type Response = AxiosResponse<IProfileEndpoint>
type Variables = object

export const getProfile: AxiosFn<Variables, Response> = async (
  params,
  signal
) => {
  return axiosClient.get(generatePath('/users/profile'), {
    signal
  })
}

export const useProfile = createQuery<Response, Variables, AxiosError>({
  primaryKey: key,
  queryFn: ({ queryKey: [_primaryKey, variables], signal }) =>
    getProfile(variables, signal),
  keepPreviousData: true
})
