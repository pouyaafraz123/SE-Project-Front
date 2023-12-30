import { IAddBoxProps } from '@components/molecules/addBox/types.ts'
import { IconButton } from '@components/molecules/iconButton'
import { Icon } from '@components/atoms/icons'
import { ReduceIcon } from '@components/icons'
import clsx from 'clsx'
import { Typography } from '@components/atoms/typography'
import classes from './styles.module.scss'

export function AddBox({
  count,
  maxCount,
  onCountChange,
  onDelete
}: IAddBoxProps) {
  return (
    <div className={clsx(classes.addBox)}>
      <IconButton
        icon={<Icon name={'add-square'} fontWeight={'bold'} />}
        label={''}
        noTooltip
        transparent
        disabled={maxCount === count}
        onClick={() => {
          onCountChange?.(count + 1)
        }}
      />
      <div className={clsx(classes.addBox__count)}>
        <Typography variant={'h3'}>{count}</Typography>
      </div>
      <IconButton
        icon={
          count === 1 ? (
            <Icon
              name={'trash-bin-trash'}
              fontWeight={'bold'}
              color={'danger-dark'}
            />
          ) : (
            <ReduceIcon />
          )
        }
        onClick={() => {
          if (count === 1) {
            onDelete?.()
          } else {
            onCountChange?.(count - 1)
          }
        }}
        label={''}
        noTooltip
        transparent
      />
    </div>
  )
}
