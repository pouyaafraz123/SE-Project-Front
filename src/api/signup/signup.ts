import { createMutation } from 'react-query-kit'
import { ISignup, ISignupDTO } from '@api/signup/types.ts'
import { axiosClient, AxiosFn } from '@/api'

export const postSignup: AxiosFn<ISignupDTO, ISignup> = (data, signal) => {
  return axiosClient.post('/users/register', data, { signal })
}

export const usePostSignup = createMutation({
  mutationFn: (data: ISignupDTO) => postSignup(data)
})
