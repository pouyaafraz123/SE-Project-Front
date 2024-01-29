import { ParseKeys } from 'i18next'
import { iconNameType } from '@/components/atoms/icons'
import { Exclusive } from '@/utils/typeTools'

export type TName = { name: ParseKeys<'sidebar'> }
export type TPath = { path: string }

export type IChildItem = TName & TPath

export type TClick = { onClick: () => void }
export type TChild = { child: IChildItem[] }

export type IMenuItem = Exclusive<Exclusive<TPath, TChild>, TClick>

export type ISidebarItems = {
  iconName: iconNameType
  items: IMenuItem
} & TName

export type SidebarMenuProps = {
  name: string
}

export type IHeaderProps = {
  firstName: string
  lastName: string
  imageUrl?: string
}
