import { create } from 'zustand'
import { devtools, subscribeWithSelector } from 'zustand/middleware'

interface UserState {
  isAuthenticated: boolean
  login: () => void
  logout: () => void
}
// TODO: where to store user login? localstorage or cookie???
export const useUserStore = create<UserState>()(
  subscribeWithSelector(
    devtools(
      (set) => ({
        isAuthenticated: true,
        login: () => set({ isAuthenticated: true }, false, 'user/login'),
        logout: () => set({ isAuthenticated: false }, false, 'user/logout')
      }),
      {
        enabled: !import.meta.env.PROD,
        name: 'userStore'
      }
    )
  )
)
