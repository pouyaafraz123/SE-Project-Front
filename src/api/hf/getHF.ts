import { AxiosFn, AxiosError, IResponse, WithPagination } from '@api/types'
import { createQuery } from 'react-query-kit'
import { generatePath } from 'react-router-dom'
import { IHealthFacility } from './types'
import { axiosClient } from '@/api/clients'

const key = 'hf'
type Response = IResponse<IHealthFacility>
type Variables = { id: number }

// TODO add table filters
export const getHF: AxiosFn<Variables, Response> = async (params, signal) => {
  const { data } = await axiosClient.get(
    generatePath('/facilities/:id', { id: params.id.toString() }),
    {
      signal
    }
  )
  return data
}

export const useHF = createQuery<Response, Variables, AxiosError>({
  primaryKey: key,
  queryFn: ({ queryKey: [_primaryKey, variables], signal }) =>
    getHF(variables, signal),
  retry(_failureCount, error) {
    if (error.code == AxiosError.ERR_BAD_REQUEST) return false
    return true
  }
})
