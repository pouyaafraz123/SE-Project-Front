import { AxiosError } from 'axios'
import { IResponse } from '../types'

export const retry = (failureCount: number, error: unknown) => {
  const _error = error as AxiosError<IResponse<unknown>>
  if (failureCount > 3) return false
  console.log(_error)

  if (_error.code == AxiosError.ERR_BAD_REQUEST) return false
  return true
}
