import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import { IconButton } from '../iconButton'
import classes from './styles.module.scss'
import { ListBoxHeaderProps } from '.'
import { Icon } from '@/components/atoms/icons'
import { Typography } from '@/components/atoms/typography'

export function ListBoxHeader(props: ListBoxHeaderProps) {
  const { title, onDownload, onPrint, iconName: IconName = 'list' } = props
  const { t } = useTranslation('form')
  return (
    <div className={clsx([classes.header, 'border-bottom'])}>
      <div className='d-flex'>
        <Icon
          name={IconName}
          fontWeight='semi-bold'
          fontSize='xl'
          type='bold-duotone'
          color='primary-main'
        />
        <Typography
          className='ps-xs'
          fontFamily='Morabba'
          fontWeight='semi-bold'
        >
          {t(title)}
        </Typography>
      </div>
      <div className={classes.iconGroup}>
        {onDownload && (
          <IconButton
            icon={<Icon name='download-square' />}
            label=''
            transparent
            noTooltip
            onClick={onDownload}
          />
        )}
        {onPrint && (
          <IconButton
            icon={<Icon name='printer-minimalistic' />}
            label=''
            transparent
            noTooltip
            onClick={onPrint}
          />
        )}
      </div>
    </div>
  )
}
