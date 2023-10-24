import { ISidebarItems } from '..'
import { IMenuItem, ISidebarItemsItem } from '../types'

export interface SidebarMenuItemProps extends ISidebarItems {
  className?: string
}

export type BeforeProps = {
  isSecondary?: boolean
}

export type ILinkProducerProps = {
  items: ISidebarItemsItem
}

export interface SidebarChildItemProps extends IMenuItem {
  parentName: string
  index: number
  total: number | undefined
}
