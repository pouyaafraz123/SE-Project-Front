import { IAddress } from '@api/address'

export interface IAddressCardProps {
  address: IAddress
  isSelected?: boolean
  onClick?: () => void
}
