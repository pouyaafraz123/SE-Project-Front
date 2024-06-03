import { AxiosResponse } from 'axios'
import { createMutation } from 'react-query-kit'
import { generatePath } from '@routes/generatePath.ts'
import { IPanel } from './types'
import { usePanels } from './getPanel'
import { axiosClient, AxiosFn, queryClient } from '@/api'

export const postPanel: AxiosFn<IPanel, AxiosResponse<null>> = (
  data,
  signal
) => {
  return axiosClient.post(generatePath('/panels', undefined, undefined), data, {
    signal
  })
}

export const usePostPanel = createMutation({
  mutationFn: (data: IPanel) => postPanel(data),
  onMutate: (newData) => {},
  onError(_error, _variables, context) {},
  onSuccess: (data, _variables, _context) => {
    queryClient.invalidateQueries(usePanels.getKey())
  }
})
