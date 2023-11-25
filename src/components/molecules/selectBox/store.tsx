import { create } from 'zustand'
import { devtools, subscribeWithSelector } from 'zustand/middleware'
import { ISelectBoxFn, SelectBoxStoreProps } from './types'
import { IOption } from '@/interfaces'

function getFilteredOptions(
  filterValue: string | undefined,
  options: IOption[] | undefined
) {
  if (filterValue && filterValue.trim() !== '' && options)
    return options.filter((item) => item.value.includes(filterValue))

  return options
}

const initialValues: SelectBoxStoreProps = {
  isOpen: false,
  options: [],
  filteredOptions: [],
  selectedItemIndex: 0,
  onSelect() {},
  renderItem: undefined,
  hasSearch: false,
  refElementPosition: {
    width: 0,
    x: 0,
    y: 0
  },
  closeOnItemSelection: true,
  customElements: undefined
}

export const useSelectBoxStore = create<SelectBoxStoreProps & ISelectBoxFn>()(
  subscribeWithSelector(
    devtools(
      (set, get) => ({
        ...initialValues,
        show(props) {
          const {
            onSelect,
            options,
            filterValue,
            refElementPosition,
            hasSearch,
            renderItem,
            closeOnItemSelection = true
          } = props
          set({
            isOpen: true,
            options: options,
            filteredOptions: getFilteredOptions(filterValue, options),
            selectedItemIndex: 0,
            onSelect: onSelect,
            refElementPosition: refElementPosition,
            hasSearch: hasSearch,
            renderItem: renderItem,
            closeOnItemSelection: closeOnItemSelection
          })
        },
        showCustomElement(props) {
          const { customElements, refElementPosition, closeOnItemSelection } =
            props

          set({
            isOpen: true,
            refElementPosition: refElementPosition,
            closeOnItemSelection: closeOnItemSelection,
            customElements: customElements
          })
        },
        rerenderCustomItems(customElement) {
          set({ customElements: customElement })
        },
        rerenderItems(renderItem) {
          set({ renderItem: renderItem })
        },
        filter(value) {
          set({
            filteredOptions: getFilteredOptions(value, get().options)
          })
        },
        select() {
          if (get().isOpen && get().filteredOptions.length > 0) {
            get().onSelect(get().options[get().selectedItemIndex])
            get().close()
          }
        },
        close() {
          if (get().isOpen) set(initialValues)
        },
        selectDown() {},
        selectUp() {}
      }),
      {
        enabled: !import.meta.env.PROD,
        name: 'useSelectBox'
      }
    )
  )
)
//  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),

const selectBoxFn: ISelectBoxFn = {
  show: useSelectBoxStore.getState().show,
  showCustomElement: useSelectBoxStore.getState().showCustomElement,
  close: useSelectBoxStore.getState().close,
  filter: useSelectBoxStore.getState().filter,
  select: useSelectBoxStore.getState().select,
  selectDown: useSelectBoxStore.getState().selectDown,
  selectUp: useSelectBoxStore.getState().selectUp,
  rerenderItems: useSelectBoxStore.getState().rerenderItems,
  rerenderCustomItems: useSelectBoxStore.getState().rerenderCustomItems
}
export { selectBoxFn }
