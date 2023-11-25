import { Fragment, PropsWithChildren } from 'react'
import { useTranslation } from 'react-i18next'
import classes from './styles.module.scss'
import { PageLayoutProps } from '.'
import { Button } from '@/components/atoms/button'
import { Typography } from '@/components/atoms/typography'
import { Link } from '@/components/atoms/link'
import { IBreadcrumbs } from '@/interfaces'

export function PageLayout(props: PropsWithChildren<PageLayoutProps>) {
  const { title, children, breadcrumbs } = props
  const { t } = useTranslation('common')

  return (
    <div className={classes.page}>
      <div className={classes.header}>
        <div className={classes.pageTitle}>
          <div className={classes.breadcrumbs}>
            {breadcrumbs.map(({ name, link }, i, { length }) => (
              <Fragment key={i}>
                {/* <Typography key={name} variant='caption3'>
                  {t(name)}
                </Typography> */}
                <Link to={link}>{t(name)}</Link>
                {i + 1 != length && (
                  <Typography
                    color='primary-main'
                    fontSize='base'
                    disableSelect
                  >
                    /
                  </Typography>
                )}
              </Fragment>
            ))}
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
