import {
  AxiosFn,
  IResponse,
  IPaginationParams,
  ISearchParams,
  AxiosError
} from '@api/types'
import { createMutation } from 'react-query-kit'
import { axiosClient, queryClient } from '@/api/clients'
import { generatePath } from '@/routes/generatePath'

export type Variables = IPaginationParams & ISearchParams

export const dummyQuery: AxiosFn<any, IResponse<unknown>> = (data, signal) => {
  return axiosClient.put('#', data, { signal })
}

export const useDummyMutation = createMutation<
  IResponse<unknown>,
  any,
  AxiosError
>({
  mutationFn: (data: any) => dummyQuery(data),
  onMutate: (newData) => {},
  onError(_error, _variables, context) {},
  onSuccess: (_data, _variables, _context) => {}
})

async function dummyMutationStory(props: any): Promise<IResponse<unknown>> {
  return { data: null, message: '' }
}
