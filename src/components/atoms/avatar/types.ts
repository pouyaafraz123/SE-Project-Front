export type TAvatarSize =
  | 'extraSmall'
  | 'smaller'
  | 'small'
  | 'medium'
  | 'large'

export interface AvatarProps {
  userInfo: {
    firstName: string
    lastName: string
    imageUrl?: string
  }
  size: TAvatarSize
}
