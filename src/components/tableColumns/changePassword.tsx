import { useTranslation } from 'react-i18next'
import { Link } from '@components/atoms/link'
import { Icon } from '../atoms/icons'
import { Typography } from '../atoms/typography'
import { ChangePasswordProps } from './types'
import classes from './styles.module.scss'

export function ChangePassword(props: ChangePasswordProps) {
  const { path } = props
  const { t } = useTranslation('form')
  return (
    <Link to={path} className='color-primary-main'>
      <div className='flex-item-center gap-xs'>
        <div className='d-inline-flex'>
          <Icon name='key-minimalistic' />
        </div>
        <Typography color='inherit' className={classes['no-word-wrap']}>
          {t('changePassword')}
        </Typography>
      </div>
    </Link>
  )
}
