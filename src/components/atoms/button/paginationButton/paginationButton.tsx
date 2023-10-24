import { PaginationButtonProps } from './types'
import styles from './styles.module.scss'

// TODO CHANGE TO BUTTON VARIANT
function PaginationButton(props: PaginationButtonProps) {
  const { status = 'default', onClick, children } = props
  const buttonClassName =
    status === 'active'
      ? styles.activeButton
      : status === 'disabled' && styles.disabledButton

  return (
    <button
      dir='rtl'
      className={`${buttonClassName} ${styles.defaultButton}`}
      onClick={onClick}
      disabled={status === 'disabled'}
    >
      {children}
    </button>
  )
}

export { PaginationButton }
