import { AxiosResponse } from 'axios'
import { createMutation } from 'react-query-kit'
import { useComments } from './getComments'
import { ICommentsDTO } from '.'
import { axiosClient, AxiosFn, queryClient } from '@/api'

export const postComment: AxiosFn<ICommentsDTO, AxiosResponse<null>> = (
  data,
  signal
) => {
  return axiosClient.post(`/products/${data.id}/reviews`, data, { signal })
}

export const usePostComment = createMutation({
  mutationFn: (data: ICommentsDTO) => postComment(data),
  onMutate: (newData) => {},
  onError(_error, _variables, context) {},
  onSuccess: (data, _variables, _context) => {
    queryClient.invalidateQueries(useComments.getKey())
  }
})
