import { THeaderTabSize } from '@components/atoms/headerTab'

export interface ITabObject<T extends string = string> {
  key: T
  title: string
}
export interface IHeaderTabGroupProps {
  tabs: ITabObject[]
  selectedKey: string
  onChange: (selectedTabId: string) => void
  tabsSize?: THeaderTabSize
  className?: string
}
