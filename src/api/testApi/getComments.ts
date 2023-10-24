import { AxiosFn, AxiosError } from '@api/types'
import { createQuery } from 'react-query-kit'
import { Comment } from './types'
import { axiosClient } from '@/api/clients'

const key = 'comments'
type Response = Comment[]
type Variables = { discussionId: number }

export const getComments: AxiosFn<Variables, Comment[]> = async (
  { discussionId },
  signal
) => {
  const { data } = await axiosClient.get(`/comments`, {
    params: {
      discussionId
    },
    signal
  })
  return data
}

export const useComments = createQuery<Response, Variables, AxiosError>({
  primaryKey: key,
  queryFn: ({ queryKey: [_primaryKey, variables], signal }) =>
    getComments(variables, signal),
  retry(_failureCount, error) {
    if (error.code == AxiosError.ERR_BAD_REQUEST) return false
    return true
  }
})
