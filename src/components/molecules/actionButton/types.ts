import { iconNameType } from '@/components/atoms/icons'
import { IOption } from '@/interfaces'

export interface IActionProps extends IOption {
  onClick: () => void
}

export interface ITableActionProps {
  icon: iconNameType
  options: IActionProps[]
}
