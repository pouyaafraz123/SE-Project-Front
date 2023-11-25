import { IHeaderTabProps } from '@components/atoms/headerTab'
import { Typography } from '@components/atoms/typography'
import clsx from 'clsx'
import classes from './styles.module.scss'

export function HeaderTab({
  title,
  isSelected,
  size = 'normal',
  onSelect
}: IHeaderTabProps) {
  return (
    <div
      className={clsx(
        classes.transition,
        classes.headerTab,
        isSelected && classes.headerTab__isSelected,
        size === 'normal' ? classes.normal : classes.small
      )}
      onClick={() => onSelect?.(!isSelected)}
    >
      <Typography
        className={classes.transition}
        fontFamily={'Morabba'}
        fontSize={size === 'normal' ? 'md' : 'xs'}
        fontWeight={isSelected ? 'semi-bold' : 'medium'}
        color={'inherit'}
      >
        {title}
      </Typography>
    </div>
  )
}
