import { AxiosResponse } from 'axios'
import { createMutation } from 'react-query-kit'
import { IAddressDTO } from '@api/address/types.ts'
import { useAddresses } from '@api/address/getAddress.ts'
import { generatePath } from '@routes/generatePath.ts'
import { axiosClient, AxiosFn, queryClient } from '@/api'

export const postAddress: AxiosFn<IAddressDTO, AxiosResponse<null>> = (
  data,
  signal
) => {
  const search = new URLSearchParams()
  search.set('address', data.address)
  return axiosClient.post(
    generatePath('/users/address', undefined, search?.toString()),
    data,
    { signal }
  )
}

export const usePostAddress = createMutation({
  mutationFn: (data: IAddressDTO) => postAddress(data),
  onMutate: (newData) => {},
  onError(_error, _variables, context) {},
  onSuccess: (data, _variables, _context) => {
    queryClient.invalidateQueries(useAddresses.getKey())
  }
})
