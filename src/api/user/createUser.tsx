import { AxiosFn, IResponse } from '@api/types'
import { axiosClient } from '../clients'
import { IUserDTO } from './type'

export const createUser: AxiosFn<IUserDTO, IResponse<IUserDTO>> = (
  data,
  signal,
  update = false
) => {
  return update
    ? axiosClient.put('/users', data, { signal })
    : axiosClient.post('/users', data, { signal })
  // return axiosClient.post('/users', data, { signal })
}
