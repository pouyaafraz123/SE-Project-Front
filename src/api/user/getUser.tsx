import { AxiosFn, AxiosError, IResponse } from '@api/types'
import { generatePath } from 'react-router-dom'
import { IUserEndpoint } from './type'
import { axiosClient } from '@/api/clients'

type Response = IResponse<IUserEndpoint>
type Variables = { id: string }

export const getUser: AxiosFn<Variables, Response> = async (params, signal) => {
  const { data } = await axiosClient.get(
    generatePath('/users/:id', { id: params.id.toString() }),
    {
      signal
    }
  )
  return data
}
