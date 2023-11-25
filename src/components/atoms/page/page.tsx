import { IPageProps } from '@components/atoms/page/types.ts'
import clsx from 'clsx'
import classes from './styles.module.scss'

export function Page({ children }: IPageProps) {
  return <div className={clsx(classes.page)}>{children}</div>
}
