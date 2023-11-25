import classes from './styles.module.scss'
import { PhoneCellProps } from '.'

export function PhoneCell(props: PhoneCellProps) {
  const { phoneNumber } = props
  return <span className={classes.blurText}>{phoneNumber}</span>
}
