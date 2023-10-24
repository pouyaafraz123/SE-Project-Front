import { useTranslation } from 'react-i18next'
import { HiddenBox } from './hiddenBox'
import classes from './styles.module.scss'
import { Centring, DarkModeToggle } from '.'
import { Typography } from '@/components/atoms/typography'

export function DarkModeToggleContainer() {
  const { t } = useTranslation('sidebar')

  return (
    <Centring className={classes.row}>
      <HiddenBox>
        <Typography fontSize='sm'>{t('common.opticalMode')}</Typography>
      </HiddenBox>
      <DarkModeToggle />
    </Centring>
  )
}
