import { IBasePageProps } from '@pages/basePage/types.ts'
import { Header } from '@components/molecules/header'
import clsx from 'clsx'
import classes from './styles.module.scss'

export function BasePage({
  children,
  noPadding,
  ...headerProps
}: IBasePageProps) {
  return (
    <div>
      <Header {...headerProps} />
      <div
        className={clsx(
          classes.basePage__content,
          noPadding && classes.basePage__noPadding
        )}
      >
        {children}
      </div>
    </div>
  )
}
