import { ICartSubmitDTO } from '@api/cart/types.ts'
import { AxiosResponse } from 'axios'
import { createMutation } from 'react-query-kit'
import { useCart } from '@api/cart/getCart.ts'
import { axiosClient, AxiosFn, queryClient } from '@/api'

export const submitCart: AxiosFn<ICartSubmitDTO, AxiosResponse<null>> = (
  data,
  signal
) => {
  return axiosClient.post('/users/cart/submit', data, { signal })
}

export const useSubmitCart = createMutation({
  mutationFn: (data: ICartSubmitDTO) => submitCart(data),
  onMutate: (newData) => {},
  onError(_error, _variables, context) {},
  onSuccess: (data, _variables, _context) => {
    queryClient.invalidateQueries(useCart.getKey())
  }
})
