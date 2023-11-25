import { AxiosFn, AxiosError, IResponse, WithPagination } from '@api/types'
import { createQuery } from 'react-query-kit'
import { generatePath } from 'react-router-dom'
import { IProfileEndpoint } from './types'
import { axiosClient } from '@/api/clients'

const key = 'profile'
type Response = IResponse<IProfileEndpoint>
type Variables = object

export const getProfile: AxiosFn<Variables, Response> = async (
  params,
  signal
) => {
  const { data } = await axiosClient.get(generatePath('/profile'), {
    signal
  })
  return data
}

export const useProfile = createQuery<Response, Variables, AxiosError>({
  primaryKey: key,
  queryFn: ({ queryKey: [_primaryKey, variables], signal }) =>
    getProfile(variables, signal)
})
