import {
  AxiosFn,
  IResponse,
  IPaginationParams,
  ISearchParams,
  AxiosError
} from '@api/types'
import { createMutation } from 'react-query-kit'
import { IUpdateWalletDTO } from './types'
import { useWalletTable } from './getWalletTable'
import { axiosClient, queryClient } from '@/api/clients'
import { generatePath } from '@/routes/generatePath'

export type Variables = IUpdateWalletDTO

export const updateWallet: AxiosFn<Variables, IResponse<unknown>> = (
  data,
  signal
) => {
  console.log(data)

  return axiosClient.post(
    generatePath('/wallets/manage/:user_id', { user_id: data.id }),
    data,
    { signal }
  )
}

export const useUpdateWallet = createMutation<
  IResponse<unknown>,
  Variables,
  AxiosError
>({
  mutationFn: (data: Variables) => updateWallet(data),
  onMutate: (newData) => {},
  onError(_error, _variables, context) {},
  onSuccess: (data, _variables, _context) => {
    const tableKey = useWalletTable.getKey()
    queryClient.invalidateQueries(tableKey)
  }
})
