import { ParseKeys } from 'i18next'
import { create } from 'zustand'
import { devtools, subscribeWithSelector } from 'zustand/middleware'

interface IModalState {
  isOpen: boolean
  children: React.ReactNode
}

const INIT_DATA: IModalState = {
  isOpen: false,
  children: <div></div>
}

export const useModalStore = create<IModalState>()(
  subscribeWithSelector(
    devtools((set) => INIT_DATA, {
      enabled: !import.meta.env.PROD,
      name: 'uiStore'
    })
  )
)

export const showModal = (children: React.ReactNode) => {
  useModalStore.setState({
    isOpen: true,
    children
  })
}

export const closeModal = () => {
  useModalStore.setState({ isOpen: false })
}
