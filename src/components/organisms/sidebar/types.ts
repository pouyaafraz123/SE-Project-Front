import { ParseKeys } from 'i18next'
import { iconNameType } from '@/components/atoms/icons'

export type IMenuItem = {
  name: ParseKeys<'sidebar'>
  path: string
}
export type ISidebarItemsItem = {
  name: ParseKeys<'sidebar'>
  path?: string
  child?: IMenuItem[]
}
export type ISidebarItems = {
  iconName: iconNameType
  items: ISidebarItemsItem
}

export type SidebarMenuProps = {
  name: string
}
