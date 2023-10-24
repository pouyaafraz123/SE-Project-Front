/* eslint-disable @typescript-eslint/no-explicit-any */
import { GenericAbortSignal, AxiosError } from 'axios'

export interface IResponse<T> {
  data: T
  message: string
}

export type AxiosFn<Variables, ReturnType> = (
  arg0: Variables,
  arg1?: GenericAbortSignal
) => Promise<ReturnType>

export { AxiosError }

export interface WithPagination<T> {
  page: number
  pageSize: number
  total: number
  list: T[]
}
