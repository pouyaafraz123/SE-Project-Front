import { AxiosResponse } from 'axios'
import { ICartDTO } from '@api/cart/types.ts'
import { createMutation } from 'react-query-kit'
import { useCart } from '@api/cart/getCart.ts'
import { axiosClient, AxiosFn, queryClient } from '@/api'

export const postCart: AxiosFn<ICartDTO, AxiosResponse<null>> = (
  data,
  signal
) => {
  return axiosClient.post('/users/cart', data, { signal })
}

export const usePostCart = createMutation({
  mutationFn: (data: ICartDTO) => postCart(data),
  onMutate: (newData) => {},
  onError(_error, _variables, context) {},
  onSuccess: (data, _variables, _context) => {
    queryClient.invalidateQueries(useCart.getKey())
  }
})
