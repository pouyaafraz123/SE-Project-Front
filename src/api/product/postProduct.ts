import { AxiosResponse } from 'axios'
import { createMutation } from 'react-query-kit'
import { IProductDTO } from '@api/product/types.ts'
import { useProductTable } from '@api/product/getProductTable.ts'
import { axiosClient, AxiosFn, queryClient } from '@/api'

export const postProduct: AxiosFn<IProductDTO, AxiosResponse<null>> = (
  data,
  signal
) => {
  return axiosClient.post('/panels/products', data, { signal })
}

export const usePostProduct = createMutation({
  mutationFn: (data: IProductDTO) => postProduct(data),
  onMutate: (newData) => {},
  onError(_error, _variables, context) {},
  onSuccess: (data, _variables, _context) => {
    queryClient.invalidateQueries(useProductTable.getKey())
  }
})
