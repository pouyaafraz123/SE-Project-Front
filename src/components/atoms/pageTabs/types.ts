import { ITabObject } from '@components/molecules/headerTabGroup'

export interface IPageTabsProps<T extends string = string> {
  tabs: ITabObject<T>[]
  selectedKey: T
  onChange: (selectedTabId: T) => void
}
