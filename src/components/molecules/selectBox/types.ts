export type IOption = { key: string | number; value: string; flag?: string }

export type ISelectBoxPosition = {
  x: number
  y: number
  width: number
}

export interface SelectBoxProps extends ISelectBoxPosition {
  onSelect?: (item: IOption, index: number) => void
  options: IOption[]
  selectedItemIndex: number
  /**
   * A function that takes in an object with a key property of type string or number
   * and a value property of type string, and returns a JSX element to render each option
   * in the `MenuItem` component.
   *
   * @param {object} props - The props object of type `IOption`.
   * @returns {JSX.Element} The JSX element to render.
   */
  renderItem?: (props: IOption) => JSX.Element
  /**
   * Determines whether the `SelectBox` component should close when an item is selected.
   *
   * If true, the select box will close on item selection.
   * If false, the select box will remain open. Defaults to true.
   *
   * By default its `true`
   */
  closeOnItemSelection?: boolean

  /**
   * If the select box should have a search input set it to `true` And give the `onFilter` callback function
   */
  hasSearch?: boolean

  /**
   * The callback function to be triggered when the input value is changed.
   */
  onFilter?: (value: string) => void
}

export type SelectBoxStoreProps = {
  isOpen: boolean
  selectedItemIndex: number
  options: IOption[]
  filteredOptions: IOption[]
  onSelect: (value: IOption) => void
  refElementPosition: ISelectBoxPosition
  renderItem: ((item: IOption) => JSX.Element) | undefined
  hasSearch?: boolean
  closeOnItemSelection: boolean
}
export type ISelectBoxFn = {
  show: (props: IShowProps) => void
  close: () => void
  select: () => void
  filter: (value: string) => void
  selectDown: () => void
  selectUp: () => void
  rerenderItems: (renderItem?: (item: IOption) => JSX.Element) => void
}

export type IShowProps = {
  onSelect?: (item: IOption) => void
  options: IOption[]
  filterValue?: string
  renderItem?: (item: IOption) => JSX.Element
  hasSearch?: boolean
  refElementPosition: ISelectBoxPosition
  /**
   * Determines whether the `SelectBox` component should close when an item is selected.
   *
   * If true, the select box will close on item selection.
   * If false, the select box will remain open. Defaults to true.
   *
   * By default its `true`
   */
  closeOnItemSelection?: boolean
}
