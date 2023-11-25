import { queryClient } from '@api/clients'
import { createMutation } from 'react-query-kit'
import { generatePath } from 'react-router-dom'
import { IFinancialRuleDTO } from './types'
import { useRules } from './getRules'
import { axiosClient } from '@/api/clients'
import { AxiosFn, IResponse } from '@/api/types'

export const editRule: AxiosFn<IFinancialRuleDTO, IResponse<null>> = (
  data,
  signal
) => {
  return axiosClient.put(
    generatePath('/financial-rules/:id', { id: data.id }),
    data,
    {
      signal
    }
  )
}

export const deleteRule: AxiosFn<{ id: string }, IResponse<null>> = (
  data,
  signal
) => {
  return axiosClient.delete(
    generatePath('/financial-rules/:id', { id: data.id }),
    {
      signal
    }
  )
}

export const useEditRule = createMutation({
  mutationFn: (data: IFinancialRuleDTO) => editRule(data),
  onMutate: (newData) => {},
  onError(_error, _variables, context) {},
  onSuccess: (data, _variables, _context) => {
    // TODO check invalidate
    const tableKey = useRules.getKey()
    queryClient.invalidateQueries(tableKey)
  }
})

export const useDeleteRule = createMutation({
  mutationFn: (data: { id: string }) => deleteRule(data),
  onMutate: (newData) => {},
  onError(_error, _variables, context) {},
  onSuccess: (data, _variables, _context) => {
    // TODO check invalidate
    const tableKey = useRules.getKey()
    queryClient.invalidateQueries(tableKey)
  }
})
