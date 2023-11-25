import { useTranslation } from 'react-i18next'
import { Link } from '@components/atoms/link'
import { Icon } from '../atoms/icons'
import { Typography } from '../atoms/typography'
import { ViewProfileProps } from '.'

export function ViewProfile(props: ViewProfileProps) {
  const { path } = props
  const { t } = useTranslation('form')
  return (
    <Link to={path} className='color-primary-main'>
      <div className='flex-item-center gap-xs'>
        <div className='d-inline-flex'>
          <Icon name='info-square' />
        </div>
        <Typography color='inherit'>{t('viewProfile')}</Typography>
      </div>
    </Link>
  )
}
