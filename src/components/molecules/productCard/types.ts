export interface IProductCardProps {
  id: string | number
  title: string
  description: string
  rating: number
  price: number
  img: string
}

export interface IProductExtraProps {
  classname?: string
}
