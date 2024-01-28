export interface ICartProductCardProps {
  id: string | number
  title: string
  img: string
  quantity: number
  price: number
  discount: number
  count: number
  onCountChange: (count: number) => void
  onDelete: () => void
}
