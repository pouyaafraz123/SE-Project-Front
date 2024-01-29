import { useState } from 'react'
import { Input } from '..'
import { PasswordProps } from '.'
import { Icon } from '@/components/atoms/icons'
import { useReadOnly } from '@/hooks'

export function Password(props: PasswordProps) {
  const {
    icon,
    onIconClick,
    inputType,
    readOnly: propsReadOnly,
    ...rest
  } = props
  const [showPassword, setShowPassword] = useState(false)
  const readOnly = useReadOnly(propsReadOnly)
  function iconClickHandler() {
    setShowPassword(!showPassword)
  }

  return (
    <Input
      onIconClick={iconClickHandler}
      icon={showPassword ? EyeClosedIcon : EyeIcon}
      inputType={showPassword ? 'text' : 'password'}
      readOnly={readOnly}
      {...rest}
    />
  )
}

function EyeIcon() {
  return <Icon name='eye' type='bold' color='primary-main' />
}
function EyeClosedIcon() {
  return <Icon name='eye-closed' type='bold' color='primary-main' />
}
