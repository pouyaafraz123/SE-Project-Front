import { AxiosResponse } from 'axios'
import { createMutation } from 'react-query-kit'
import { generatePath } from '@routes/generatePath.ts'
import { useUserTable } from '../users/getUsers'
import { axiosClient, AxiosFn, queryClient } from '@/api'
interface IAddMember {
  email: string
}
export const postPanelMember: AxiosFn<IAddMember, AxiosResponse<null>> = (
  data,
  signal
) => {
  return axiosClient.post(
    generatePath('/panels/members', undefined, undefined),
    data,
    {
      signal
    }
  )
}

export const usePostPanelMember = createMutation({
  mutationFn: (data: IAddMember) => postPanelMember(data),
  onMutate: (newData) => {},
  onError(_error, _variables, context) {
    console.log('error ', _error)
  },
  onSuccess: (data, _variables, _context) => {
    queryClient.invalidateQueries(useUserTable.getKey())
  }
})
