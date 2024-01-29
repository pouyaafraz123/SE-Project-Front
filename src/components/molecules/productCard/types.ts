import { ID } from '@constants'

export interface IProductCardProps {
  id: ID
  title: string
  description: string
  rating: number
  price: number
  img: string
}

export interface IProductExtraProps {
  classname?: string
}
