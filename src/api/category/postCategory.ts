import { AxiosResponse } from 'axios'
import { createMutation } from 'react-query-kit'
import { ICategoryDTO } from '@api/category/types.ts'
import { useCategories } from '@api/category/getCategories.ts'
import { axiosClient, AxiosFn, queryClient } from '@/api'

export const postCategory: AxiosFn<ICategoryDTO, AxiosResponse<null>> = (
  data,
  signal
) => {
  return axiosClient.post('/panels/categories', data, { signal })
}

export const usePostCategory = createMutation({
  mutationFn: (data: ICategoryDTO) => postCategory(data),
  onMutate: (newData) => {},
  onError(_error, _variables, context) {},
  onSuccess: (data, _variables, _context) => {
    queryClient.invalidateQueries(useCategories.getKey())
  }
})
