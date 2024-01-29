import { AxiosResponse } from 'axios'
import { createMutation } from 'react-query-kit'
import { IBrandDTO } from '@api/brands/types.ts'
import { useBrands } from '@api/brands/getBrands.ts'
import { axiosClient, AxiosFn, queryClient } from '@/api'

export const postBrand: AxiosFn<IBrandDTO, AxiosResponse<null>> = (
  data,
  signal
) => {
  return axiosClient.post('/panels/brands', data, { signal })
}

export const usePostBrand = createMutation({
  mutationFn: (data: IBrandDTO) => postBrand(data),
  onMutate: (newData) => {},
  onError(_error, _variables, context) {},
  onSuccess: (data, _variables, _context) => {
    queryClient.invalidateQueries(useBrands.getKey())
  }
})
