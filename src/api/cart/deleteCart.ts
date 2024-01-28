import { AxiosResponse } from 'axios'
import { createMutation } from 'react-query-kit'
import { useCart } from '@api/cart/getCart.ts'
import { ID } from '@constants'
import { axiosClient, AxiosFn, queryClient } from '@/api'

export const cartDel: AxiosFn<{ id: ID }, AxiosResponse<any>> = (
  { id },
  signal
) => {
  return axiosClient.delete(`/users/cart/${id}`, { signal })
}

export const useDeleteCart = createMutation({
  mutationFn: (data: { id: ID }) => cartDel(data),
  onMutate: (newData) => {},
  onError(_error, _variables, context) {},
  onSuccess: (data, _variables, _context) => {
    queryClient.invalidateQueries(useCart.getKey())
  }
})
