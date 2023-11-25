export interface IHeaderTabProps {
  title: string
  isSelected?: boolean
  size?: THeaderTabSize
  onSelect?: (isSelected: boolean) => void
}

export type THeaderTabSize = 'normal' | 'small'
