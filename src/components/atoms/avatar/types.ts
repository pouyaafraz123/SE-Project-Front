export type TAvatarSize = 'small' | 'medium' | 'large'

export interface AvatarProps {
  userInfo: {
    firstName: string
    lastName: string
    imageUrl?: string
  }
  size: TAvatarSize
  variant?: number
  sidebar?: boolean
  role?: 'super-admin' | 'local-admin' | 'cmo' | 'doctor' | 'staff' | 'patient'
  roleValue?: string
}
