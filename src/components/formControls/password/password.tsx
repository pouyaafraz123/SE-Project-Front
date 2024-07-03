import { useState } from 'react'
import { Input } from '..'
import { PasswordProps } from '.'
import { Icon } from '@/components/atoms/icons'

export function Password(props: PasswordProps) {
  const {
    icon,
    onIconClick,
    inputType,
    readOnly: propsReadOnly,
    ...rest
  } = props
  const [showPassword, setShowPassword] = useState(false)

  return (
    <Input
      onIconClick={() => setShowPassword(!showPassword)}
      icon={showPassword ? EyeClosedIcon : EyeIcon}
      inputType={showPassword ? 'text' : 'password'}
      iconType='button'
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
