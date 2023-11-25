import { IconButton } from '../molecules/iconButton'
import { Icon } from '../atoms/icons'
import { DeleteIconButtonProps } from '.'

export function DeleteIconButton(props: DeleteIconButtonProps) {
  const { onClick } = props
  return (
    <IconButton
      icon={<Icon name='trash-bin-trash' color='danger-main' />}
      noTooltip
      transparent
      label=''
      onClick={() => onClick?.()}
    />
  )
}
