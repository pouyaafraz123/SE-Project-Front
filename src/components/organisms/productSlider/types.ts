import { ID } from '@constants'

export interface IProductSliderProps {
  items: ISliderItem[]
}

export type ISliderItem = {
  img: string
  title: string
  id: ID
}
