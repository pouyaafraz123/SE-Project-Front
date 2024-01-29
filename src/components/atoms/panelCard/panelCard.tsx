import { IPanelCardProps } from '@components/atoms/panelCard/types.ts'
import clsx from 'clsx'
import { Icon } from '@components/atoms/icons'
import { Typography } from '@components/atoms/typography'
import classes from './styles.module.scss'

export function PanelCard({ title, onClick }: IPanelCardProps) {
  return (
    <div className={clsx(classes.panel__card)} onClick={() => onClick()}>
      <div className={clsx(classes.panel__cardIcon)}>
        <Icon name={'arrow-left'} fontSize={'2xl'} fontWeight={'bold'} />
      </div>
      <div className={clsx(classes.panel__cardText)}>
        <Typography variant={'h4'}>{title}</Typography>
      </div>
    </div>
  )
}
