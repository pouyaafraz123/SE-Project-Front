import { IAddress, IAddressDTO } from '@api/address'
import { ITable } from '@/interfaces'

export interface IViewAddressProps extends ITable<IAddress> {}
export interface IAddAddressFormProps {
  onSubmit: (data: IAddressDTO) => void
}
