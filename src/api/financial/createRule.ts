import { queryClient } from '@api/clients'

import { createMutation } from 'react-query-kit'
import { FinancialRuleCreateDTO } from './types'
import { useRuleTable } from './getRuleTable'
import { axiosClient } from '@/api/clients'
import { AxiosFn, IResponse } from '@/api/types'

export const createRule: AxiosFn<FinancialRuleCreateDTO, IResponse<null>> = (
  data,
  signal
) => {
  return axiosClient.post('/financial-rules', data, { signal })
}

export const useCreateRule = createMutation({
  mutationFn: (data: FinancialRuleCreateDTO) => createRule(data),
  onMutate: (newData) => {},
  onError(_error, _variables, context) {},
  onSuccess: (data, _variables, _context) => {
    const tableKey = useRuleTable.getKey()
    queryClient.invalidateQueries(tableKey)
  }
})
