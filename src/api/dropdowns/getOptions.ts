import { AxiosFn, AxiosError, IResponse } from '@api/types'
import { createQuery } from 'react-query-kit'
import { generatePath } from 'react-router-dom'
import { Options, OptionQueryVars, OptionsType } from './types'
import { axiosClient } from '@/api/clients'

const optionURLs: { [key in OptionsType]: string } = {
  country: '/dropdown/countries',
  state: '/dropdown/countries/:country_id/states',
  city: '/dropdown/states/:state_id/cities',
  hfType: '/dropdown/facilities/types'
}

const key = 'options'
type Response = IResponse<Options>
type Variables = OptionQueryVars

export const getOptions: AxiosFn<Variables, Response> = async (
  props,
  signal
) => {
  const { OptionsType, ...rest } = props
  const url = generatePath(optionURLs[OptionsType], props)

  const { data } = await axiosClient.get(url, {
    signal
  })
  return data
}

export const useOptions = createQuery<Response, Variables, AxiosError>({
  primaryKey: key,
  queryFn: ({ queryKey: [_primaryKey, variables], signal }) =>
    getOptions(variables, signal),
  retry(_failureCount, error) {
    if (error.code == AxiosError.ERR_BAD_REQUEST) return false
    return true
  }
})
