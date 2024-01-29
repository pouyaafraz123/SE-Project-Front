import { UserTypes } from '@constants'

export interface IAddress {
  uuid: string
  location: string
}

export interface IAddressDTO {
  address: string
}

export interface IAddressGetParams {
  Uuid?: string
  Role?: UserTypes
}
