import { Ref, forwardRef, useEffect } from 'react'
import { SearchInputProps } from './types'
import { Input } from '@/components/formControls'
import { useDebounced } from '@/hooks'
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
    onChange,
    readOnly,
    disabled,
    icon,
    ...rest
  } = props

  const debouncedValue = useDebounced(value, 500)

  useEffect(() => {
    onDebouncedValueChange(debouncedValue || value)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue])

  function clear() {
    if (canDelete) {
      if (onIconClick) {
        onIconClick()
      } else {
        onDebouncedValueChange('')
        onChange?.('')
      }
    }
  }
  const canDelete = !(value === '' || readOnly || disabled)

  return (
    <Input
      ref={ref}
      icon={icon || (canDelete ? CloseCircle : Magnifier)}
      onIconClick={clear}
      onChange={onChange}
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
