import {
  AxiosFn,
  AxiosError,
  IResponse,
  WithPagination,
  WithStats,
  IPaginationParams,
  ISearchParams
} from '@api/types'
import { createQuery } from 'react-query-kit'
import { IFinancialRuleTableEndpoint } from './types'
import { axiosClient } from '@/api/clients'

const key = 'ruleTable'
type Response = IResponse<
  WithStats<WithPagination<IFinancialRuleTableEndpoint>>
>
type Variables = IPaginationParams & ISearchParams

// TODO add table filters
export const getRuleTable: AxiosFn<Variables, Response> = async (
  params,
  signal
) => {
  const { data } = await axiosClient.get('/financial-rules', {
    params,
    signal
  })
  return data
}

export const useRuleTable = createQuery<Response, Variables, AxiosError>({
  primaryKey: key,
  queryFn: ({ queryKey: [_primaryKey, variables], signal }) =>
    getRuleTable(variables, signal)
})
