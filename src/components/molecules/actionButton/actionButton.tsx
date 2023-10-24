import { useRef } from 'react'
import { IconButton } from '@components/molecules/iconButton'
import { Icon } from '@components/atoms/icons'
import {
  getSelectBoxPosition,
  selectBoxFn
} from '@components/molecules/selectBox'

// TODO generalize this component

export function ActionBtn() {
  const buttonRef = useRef(null)
  return (
    <IconButton
      label=''
      icon={<Icon name='add-square' />}
      transparent
      noTooltip
      ref={buttonRef}
      onClick={() =>
        selectBoxFn.show({
          onSelect(item) {
            console.log('selected item: ', item)
          },
          refElementPosition: getSelectBoxPosition(buttonRef.current),
          options: [{ key: 1, value: 'افزودن زیرشاخه' }]
        })
      }
    />
  )
}
