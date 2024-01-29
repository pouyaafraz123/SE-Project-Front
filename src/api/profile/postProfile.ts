import { axiosClient, AxiosFn, queryClient } from '@/api'
import { AxiosResponse } from 'axios'
import { createMutation } from 'react-query-kit'
import { IProfileDTO } from '@api/profile/types.ts'
import { useProfile } from '@api/profile/getProfile.ts'

export const postProfile: AxiosFn<IProfileDTO, AxiosResponse<null>> = (
  data,
  signal
) => {
  return axiosClient.post('/users/profile', data, { signal })
}

export const usePostProfile = createMutation({
  mutationFn: (data: IProfileDTO) => postProfile(data),
  onMutate: (newData) => {},
  onError(_error, _variables, context) {},
  onSuccess: (data, _variables, _context) => {
    queryClient.invalidateQueries(useProfile.getKey())
  }
})
