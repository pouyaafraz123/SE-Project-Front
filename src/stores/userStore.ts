import { create } from 'zustand'
import { devtools, persist, subscribeWithSelector } from 'zustand/middleware'
import { UserTypes } from '@constants'

interface UserState {
  isAuthenticated: boolean
  login: (token: string) => void
  logout: () => void
  role: UserTypes
  token: string
}

// TODO: where to store user login? localstorage or cookie???
export const useUserStore = create<UserState>()(
  subscribeWithSelector(
    persist(
      devtools(
        (set) => ({
          isAuthenticated: true,
          login: (token: string) =>
            set({ isAuthenticated: true, token }, false, 'user/login'),
          logout: () => set({ isAuthenticated: false }, false, 'user/logout'),
          role: import.meta.env.VITE_PANEL,
          token: import.meta.env.VITE_API_TOKEN
        }),
        {
          enabled: !import.meta.env.PROD,
          name: 'userStore'
        }
      ),
      {
        name: 'userState',
        partialize: (state) => ({
          role: state.role,
          token: state.token
        })
      }
    )
  )
)
