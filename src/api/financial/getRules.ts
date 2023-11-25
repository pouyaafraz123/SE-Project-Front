import { AxiosFn, AxiosError, IResponse } from '@api/types'
import { createQuery } from 'react-query-kit'
import { IFinancialRulesListPerDoctorEndpoint } from './types'
import { axiosClient } from '@/api/clients'
import { generatePath } from '@/routes/generatePath'

const key = 'ruleTable'
type Response = IResponse<IFinancialRulesListPerDoctorEndpoint>
type Variables = { doctor_id: string }

// TODO add table filters
export const getRules: AxiosFn<Variables, Response> = async (
  { doctor_id },
  signal
) => {
  const { data } = await axiosClient.get(
    generatePath('/financial-rules/:doctor_id', { doctor_id }),
    {
      signal
    }
  )
  return data
}

export const useRules = createQuery<Response, Variables, AxiosError>({
  primaryKey: key,
  queryFn: ({ queryKey: [_primaryKey, variables], signal }) =>
    getRules(variables, signal)
})
