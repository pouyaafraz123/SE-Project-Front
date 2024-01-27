import { create } from 'zustand'
import { devtools, persist, subscribeWithSelector } from 'zustand/middleware'
import { UserTypes } from '@constants'
import { axiosClient } from '@/api'

interface UserState {
  isAuthenticated: boolean
  login: (token: string, role: UserTypes) => void
  logout: () => void
  role?: UserTypes
  token?: string
}

export const useUserStore = create<UserState>()(
  subscribeWithSelector(
    persist(
      devtools(
        (set) => ({
          isAuthenticated: false,
          login: (token: string, role: UserTypes) => {
            set({ isAuthenticated: true, token, role }, false, 'user/login')
          },
          logout: () => {
            set({ isAuthenticated: false }, true, 'user/logout')
            delete axiosClient.defaults.headers.common['Authorization']
          }
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
