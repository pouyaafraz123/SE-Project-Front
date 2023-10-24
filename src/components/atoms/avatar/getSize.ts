import { TAvatarSize } from '@components/atoms/avatar/types.ts'
import styles from './styles.module.scss'

export function getSize(size: TAvatarSize) {
  let sizeClass
  size === 'extraSmall'
    ? (sizeClass = styles.extraSmall)
    : size === 'small'
    ? (sizeClass = styles.small)
    : size === 'smaller'
    ? (sizeClass = styles.smaller)
    : size === 'medium'
    ? (sizeClass = styles.medium)
    : size === 'large'
    ? (sizeClass = styles.large)
    : ''
  return sizeClass
}
