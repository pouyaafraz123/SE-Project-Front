import styles from './styles.module.scss'
import { SpoilerProps } from './types'

export function Spoiler(props: SpoilerProps) {
  const { value } = props

  return <span className={styles.blurText}>{value || '- - -'}</span>
}
