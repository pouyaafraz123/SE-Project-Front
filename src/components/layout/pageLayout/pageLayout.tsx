import { PropsWithChildren } from 'react'
import { useTranslation } from 'react-i18next'
import classes from './styles.module.scss'
import { PageLayoutProps } from '.'
import { Button } from '@/components/atoms/button'
import { Typography } from '@/components/atoms/typography'

export function PageLayout(props: PropsWithChildren<PageLayoutProps>) {
  const { title, children } = props
  const { t } = useTranslation('common')

  return (
    <div className={classes.page}>
      <div className={classes.header}>
        <div className={classes.pageTitle}>
          <div className={classes.breadcrumbs}>
            <Typography variant='caption3'>{t('mainPage')}</Typography>
            <Typography color='primary-main' fontSize='base' disableSelect>
              /
            </Typography>
            {
              //TODO: breadcrumb paths
            }
            <Typography variant='caption3'>{t(title)}</Typography>
          </div>
          <Typography variant='h5' color='primary-dark'>
            {t(title)}
          </Typography>
        </div>
        <div className={classes.headerAction}>
          <Button mode='secondary' label={t('messages')} />
          <Button mode='secondary' label={t('notifications')} />
        </div>
      </div>
      <div>{children}</div>
    </div>
  )
}
