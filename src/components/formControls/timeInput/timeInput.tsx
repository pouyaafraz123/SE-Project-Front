import { Input } from '..'
import { TimeInputProps } from '.'
import { useReadOnly } from '@/hooks'

export function TimeInput(props: TimeInputProps) {
  const { showIcon, inputType, readOnly: propsReadOnly, icon, ...rest } = props
  const readOnly = useReadOnly(propsReadOnly)
  return (
    <Input inputType='time' showIcon={false} readOnly={readOnly} {...rest} />
  )
}
