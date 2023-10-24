import clsx from 'clsx'
import classes from './styles.module.scss'
import { BeforeProps } from './types'

export default function Before(props: BeforeProps) {
  const { isSecondary = false } = props
  return (
    <div
      className={clsx([
        classes.before,
        isSecondary ? classes.secondaryBefore : ''
      ])}
    ></div>
  )
}
