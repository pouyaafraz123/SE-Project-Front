import { AxiosError, AxiosFn, IResponse } from '@api/types'
import { createQuery } from 'react-query-kit'
import { IPhoneCode } from './types'
import { axiosClient } from '@/api/clients'

const key = 'options'
type Response = IResponse<IPhoneCode[]>
type Variables = object

export const getPhoneCodes: AxiosFn<Variables, Response> = async (
  props,
  signal
) => {
  const { data } = await axiosClient.get('/dropdown/phone-codes', {
    signal
  })
  return data
}

export const usePhoneCodes = createQuery<Response, Variables, AxiosError>({
  primaryKey: key,
  queryFn: ({ queryKey: [_primaryKey, variables], signal }) =>
    getPhoneCodes(variables, signal)
})
