import { IAddressCardProps } from '@components/atoms/addressCard/types.ts'
import clsx from 'clsx'
import classes from './styles.module.scss'

export function AddressCard({
  address: { uuid, location },
  isSelected,
  onClick
}: IAddressCardProps) {
  return (
    <div
      onClick={() => onClick?.()}
      className={clsx(classes.card, isSelected && classes.card__selected)}
    >{`${location}`}</div>
  )
}
