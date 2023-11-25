import { THeaderTabSize } from '@components/atoms/headerTab'

export interface ITabObject {
  key: string
  title: string
}
export interface IHeaderTabGroupProps {
  tabs: ITabObject[]
  selectedKey: string
  onChange: (selectedTabId: string) => void
  tabsSize?: THeaderTabSize
  className?: string
}
