import { IResponse } from '@/api/types'
import { IUpdateBalanceMutationFn } from '@/interfaces'

export interface IProps {
  id: string
  mutateFn: IUpdateBalanceMutationFn
}
