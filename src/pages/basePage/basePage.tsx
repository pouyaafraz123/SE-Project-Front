import { IBasePageProps } from '@pages/basePage/types.ts'
import { Header } from '@components/molecules/header'
import clsx from 'clsx'
import classes from './styles.module.scss'
import { Footer } from '@/components/organisms/footerSection'

export function BasePage({
  children,
  noPadding,
  ...headerProps
}: IBasePageProps) {
  return (
    <div className={clsx('w-100', classes.basePage)}>
      <Header {...headerProps} />
      <div
        className={clsx(
          classes.basePage__content,
          noPadding && classes.basePage__noPadding
        )}
      >
        {children}
      </div>
      <Footer />
    </div>
  )
}
