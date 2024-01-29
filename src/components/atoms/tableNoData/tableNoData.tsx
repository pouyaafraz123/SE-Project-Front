import { Chip } from '@components/atoms/chip'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import classes from './styles.module.scss'

export function TableNoData() {
  const { t } = useTranslation('form')

  return (
    <div className={clsx(classes.noData)}>
      <Chip name='nodata' value={t('no_data')} />
    </div>
  )
}
