import { AxiosError, GenericAbortSignal } from 'axios'
import { IStats } from '@/interfaces'

export type IResponse<T> = {
  data: T
  message: string
  errors?: { [key: string]: string[] }
}

export type AxiosFn<Variables, ReturnType> = (
  arg0: Variables,
  arg1?: GenericAbortSignal,
  arg2?: boolean
) => Promise<ReturnType>

export { AxiosError }

export interface WithPagination<T> {
  total: number
  data: T[]
}

export interface IPaginationParams {
  PageSize: number
  PageIndex: number
}

export interface ISearchParams {
  filter: string
}

export type WithStats<T> = {
  statistics: IStats[]
} & T

export interface WithInfinite<T> {
  list: T[]
  nextCursor?: number
}
