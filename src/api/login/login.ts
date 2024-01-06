import { ILogin, ILoginDTO } from '@api/login/types.ts'
import { createMutation } from 'react-query-kit'
import { axiosClient, AxiosFn, IResponse } from '@/api'

export const postLogin: AxiosFn<ILoginDTO, IResponse<ILogin>> = (
  data,
  signal
) => {
  return axiosClient.post('/users/login', data, { signal })
}

export const usePostLogin = createMutation({
  mutationFn: (data: ILoginDTO) => postLogin(data)
})
