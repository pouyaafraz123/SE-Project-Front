import { AxiosError, AxiosFn, IResponse } from '@api/types'
import { createQuery } from 'react-query-kit'
import { generatePath } from 'react-router-dom'
import { QueryVariablesType } from './types'
import { dropdownURLs } from './path'
import { axiosClient } from '@/api/clients'
import { IOption } from '@/interfaces'

const key = 'options'
type Response = IResponse<IOption[]>
type Variables = QueryVariablesType

export const getOptions: AxiosFn<Variables, Response> = async (
  props,
  signal
) => {
  const { optionType, params } = props
  const url = generatePath(dropdownURLs[optionType], params)

  const { data } = await axiosClient.get(url, {
    signal
  })
  return data
}

export const useOptions = createQuery<Response, Variables, AxiosError>({
  primaryKey: key,
  cacheTime: Infinity,
  staleTime: Infinity,
  queryFn: ({ queryKey: [_primaryKey, variables], signal }) =>
    getOptions(variables, signal)
})
