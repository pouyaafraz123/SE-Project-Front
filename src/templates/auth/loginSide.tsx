import { Typography } from '@components/atoms/typography'
import { useTranslation } from 'react-i18next'
import { Button } from '@components/atoms/button'
import clsx from 'clsx'
import classes from './styles.module.scss'
import { ISideProps } from '@/templates/auth/types.ts'

export function LoginSide({ onChange }: ISideProps) {
  const { t } = useTranslation('form')

  return (
    <div className={clsx(classes.authContainer__sideInside)}>
      <Typography variant={'h3'} color={'white'}>
        {t('loginSideTitle')}
      </Typography>
      <Typography color={'white'}>{t('loginSideText')}</Typography>
      <Button mode={'main'} onClick={() => onChange()}>
        {t('signup')}
      </Button>
    </div>
  )
}
