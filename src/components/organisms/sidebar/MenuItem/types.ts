import { ISidebarItems } from '..'
import { IChildItem } from '../types'

export type SidebarMenuItemProps = {
  className?: string
} & ISidebarItems

export type BeforeProps = {
  isSecondary?: boolean
}

export interface SidebarChildItemProps extends IChildItem {
  parentName: string
  index: number
  /**
   * total number of child items of menu item
   */
  total: number | undefined
}
