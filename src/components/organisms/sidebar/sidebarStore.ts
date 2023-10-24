import { create } from 'zustand'
import { devtools, subscribeWithSelector } from 'zustand/middleware'
import { ISidebarItems } from './types'

type SidebarStoreProps = {
  isOpen: boolean
  items: ISidebarItems[]
  selectedChildParentName: string
}
type SidebarStoreFn = {
  setItems: (value: ISidebarItems[]) => void
  setSelectedParentName: (name: string) => void
  toggle: () => void
  open: () => void
  close: () => void
}

const initialValues: SidebarStoreProps = {
  isOpen: true,
  items: [],
  selectedChildParentName: ''
}

export const useSidebarStore = create<SidebarStoreProps & SidebarStoreFn>()(
  subscribeWithSelector(
    devtools(
      (set, get) => ({
        ...initialValues,
        setItems(value) {
          set({
            items: value
          })
        },
        toggle() {
          set((prev) => ({
            isOpen: !prev.isOpen
          }))
        },
        close() {
          set({ isOpen: false })
        },
        open() {
          set({ isOpen: true })
        },
        setSelectedParentName(name) {
          if (name !== get().selectedChildParentName) {
            set({ selectedChildParentName: name })
          }
        }
      }),
      {
        enabled: !import.meta.env.PROD,
        name: 'useSidebarStore'
      }
    )
  )
)
//  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),

const sidebarFn: SidebarStoreFn = {
  toggle: useSidebarStore.getState().toggle,
  setItems: useSidebarStore.getState().setItems,
  close: useSidebarStore.getState().close,
  open: useSidebarStore.getState().open,
  setSelectedParentName: useSidebarStore.getState().setSelectedParentName
}
export { sidebarFn }
