import { AxiosError, WithInfinite } from '@api/types'
import { createInfiniteQuery } from 'react-query-kit'
import { GenericAbortSignal } from 'axios'
import {
  IHFSearchEndpoint,
  InfiniteQueryTypes,
  InfiniteQueryVars,
  IUserSearchEndpoint
} from '.'
import { axiosClient } from '@/api/clients'

const getUrl: { [key in InfiniteQueryTypes]: string } = {
  user: '/infinite/doctors',
  hf: '/infinite/hf'
}

const key = 'optionsInfinite'
type Response =
  | ({ type: 'user' } & WithInfinite<IUserSearchEndpoint>)
  | ({ type: 'hf' } & WithInfinite<IHFSearchEndpoint>)
type Variables = InfiniteQueryVars & { filter?: string }

const getInfinite = async (
  { type, ...props }: Variables & { cursor: number },
  signal?: GenericAbortSignal
): Promise<Response> => {
  const url = getUrl[type]
  const { data } = await axiosClient.get(url, {
    params: props,
    signal
  })
  return data.data
}

export const useInfinite = createInfiniteQuery<Response, Variables, AxiosError>(
  {
    primaryKey: key,
    queryFn: ({ queryKey: [_primaryKey, variables], pageParam, signal }) =>
      getInfinite({ ...variables, cursor: pageParam }, signal),
    getNextPageParam: (lastPage, pages) => lastPage.nextCursor
    //   initialPageParam: 1
  }
)
