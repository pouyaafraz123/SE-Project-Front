import { TAvatarSize } from '@components/atoms/avatar/types.ts'
import styles from './styles.module.scss'

export function getSize(size: TAvatarSize) {
  let sizeClass
  size === 'small'
    ? (sizeClass = styles.small)
    : size === 'medium'
    ? (sizeClass = styles.medium)
    : size === 'large'
    ? (sizeClass = styles.large)
    : ''
  return sizeClass
}
