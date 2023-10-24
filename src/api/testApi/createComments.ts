import { queryClient } from '@api/clients'

import { createMutation } from 'react-query-kit'
import { Comment, CreateCommentDTO } from './types'
import { useComments } from './getComments'
import { axiosClient } from '@/api/clients'
import { AxiosFn } from '@/api/types'

export const createComment: AxiosFn<CreateCommentDTO, Comment> = (
  data,
  signal
) => {
  return axiosClient.post('/comments', data, { signal })
}

export const useCreateComment = createMutation({
  mutationFn: (data: CreateCommentDTO) => createComment(data),
  onMutate: (newData) => {
    const key = useComments.getKey({ discussionId: newData.discussionId })
    // cancel previous queries??

    // optimistic update
    const previousData = queryClient.getQueryData<Comment[]>(key)
    queryClient.setQueryData(key, () => [...(previousData || []), newData])
    return { previousData, key }
  },
  onError(_error, _variables, context) {
    if (context?.previousData) {
      queryClient.setQueryData(context.key, context.previousData)
    }
  },
  onSuccess: (_data, _variables, _context) => {
    // invalidate not required if using optimistic (or not use isFetching)
    //   queryClient.invalidateQueries(['comments', variables.data.discussionId])
  }
})
