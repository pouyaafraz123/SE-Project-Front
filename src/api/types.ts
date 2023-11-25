import { GenericAbortSignal, AxiosError } from 'axios'
import { IStats } from '@/interfaces'

export interface IResponse<T> {
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
  page: {
    pageNumber: number
    pageSize: number
    total: number
    list: T[]
  }
}

export interface IPaginationParams {
  page: number
  per_page: number
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
