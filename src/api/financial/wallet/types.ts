import { IOption, GenderTypes } from '@/interfaces'

export interface IPaientWalletTableEndpoint {
  user: {
    id: string
    first_name: string
    last_name: string
    birthday: string
    national_id: string
    gender: IOption<GenderTypes>
  }
  balance: number
  currency: string //'IRT'
}

export interface IUpdateWalletDTO {
  id: string
  type: 'deposit' | 'withdraw'
  amount: string
}
