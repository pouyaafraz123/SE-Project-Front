import { forwardRef, Ref, useEffect } from 'react'
import { SearchInputProps } from './types'
import { Input } from '@/components/formControls'
import { useDebounced, useReadOnly } from '@/hooks'
import { Icon } from '@/components/atoms/icons'

export const SearchInput = forwardRef(function SearchInput(
  props: SearchInputProps,
  ref: Ref<HTMLInputElement>
) {
  const {
    value = '',
    onDebouncedValueChange,
    defaultValue,
    onIconClick,
    onIconMouseDown,
    onChange,
    readOnly: propsReadOnly,
    disabled,
    searchIconType = 'image',
    icon,
    ...rest
  } = props
  const readOnly = useReadOnly(propsReadOnly)
  const debouncedValue = useDebounced(value, 500)

  useEffect(() => {
    onDebouncedValueChange?.(debouncedValue || value)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue])

  const canDelete = !(value === '' || readOnly || disabled)

  function clear() {
    if (canDelete) {
      onDebouncedValueChange?.('')
      onChange?.('')
      onIconClick?.('delete')
    } else {
      onIconClick?.('search')
    }
  }

  return (
    <Input
      ref={ref}
      iconType={canDelete ? 'button' : searchIconType}
      icon={icon || (canDelete ? CloseCircle : Magnifier)}
      onIconClick={clear}
      onChange={onChange}
      onIconMouseDown={(e) => {
        //prevent input focusout
        e.preventDefault()
        onIconMouseDown?.(e)
      }}
      placeholder='جستجو کنید' //TODO: get from useTranslation
      value={value}
      readOnly={readOnly}
      disabled={disabled}
      {...rest}
    />
  )
})

function CloseCircle() {
  return <Icon name='close-circle' />
}
function Magnifier() {
  return <Icon name='magnifer' />
}
