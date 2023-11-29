import { TPageTableParamProps } from '@components/organisms/pageTable'

export interface ITable<T> {
  data: T[]
  isLoading?: boolean
  isFetching?: boolean
  total: number
  tableParamProps: TPageTableParamProps
}

// TODO FIX THIS
export type IStatsKeys =
  | 'user-active'
  | 'user-pending'
  | 'user-denied'
  | 'user-all'
  | 'hospital'
  | 'clinic'
  | 'health_center'
  | 'all-appointments'
  | 'pending-appointments'
  | 'checked-in-appointments'
  | 'completed-appointments'
  | 'canceled-appointments'

export interface IStats {
  key: IStatsKeys
  name: string
  value: number
}
