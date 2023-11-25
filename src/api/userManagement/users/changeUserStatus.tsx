import {
  AxiosFn,
  IResponse,
  IPaginationParams,
  ISearchParams,
  AxiosError
} from '@api/types'
import { createMutation } from 'react-query-kit'
import { IChangeUserStatusEndpoint, useUsersList } from '.'
import { axiosClient, queryClient } from '@/api/clients'
import { generatePath } from '@/routes/generatePath'

export type Variables = IPaginationParams & ISearchParams

export const changeUserStatus: AxiosFn<
  IChangeUserStatusEndpoint,
  IResponse<unknown>
> = (data, signal) => {
  console.log(data)

  return axiosClient.put(
    generatePath('/users/approval/:user_id', { user_id: data.id }),
    data,
    { signal }
  )
}

export const useChangeUserStatus = createMutation<
  IResponse<unknown>,
  IChangeUserStatusEndpoint,
  AxiosError
>({
  mutationFn: (data: IChangeUserStatusEndpoint) => changeUserStatus(data),
  onMutate: (newData) => {},
  onError(_error, _variables, context) {},
  onSuccess: (data, _variables, _context) => {
    const tableKey = useUsersList.getKey()
    queryClient.invalidateQueries(tableKey)
  }
})
