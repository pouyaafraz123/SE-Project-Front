import { AxiosResponse } from 'axios'
import { ICartDTO } from '@api/cart/types.ts'
import { createMutation } from 'react-query-kit'
import { axiosClient, AxiosFn } from '@/api'

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
  onSuccess: (data, _variables, _context) => {}
})
