import { ITableContainerProps } from '@components/organisms/pageTable'
import clsx from 'clsx'
import classes from '../../styles.module.scss'

export function TableContainer({ children }: ITableContainerProps) {
  return <div className={clsx(classes.pageTable__container)}>{children}</div>
}
