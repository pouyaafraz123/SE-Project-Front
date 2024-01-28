import { ICart, ICartDTO } from '@api/cart'
import { ID } from '@constants'
import { IAddress } from '@api/address'
import { ITable } from '@/interfaces'

export interface ICartTemplateProps extends ITable<ICart> {
  // onSubmitCart: (data) => void
  onCartUpdate: (data: ICartDTO) => void
  onCartItemDelete: (id: ID) => void
  addresses: IAddress[]
  selectedAddress: string
  onAddressSelect: (id: string) => void
  onSubmit: () => void
}
