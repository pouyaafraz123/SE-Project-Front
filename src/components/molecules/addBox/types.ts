export interface IAddBoxProps {
  count: number
  onCountChange?: (count: number) => void
  maxCount: number
  onDelete?: () => void
}
