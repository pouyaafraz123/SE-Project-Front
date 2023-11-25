import { Input } from '..'
import { TimeInputProps } from '.'

export function TimeInput(props: TimeInputProps) {
  const { type, showIcon, icon, ...rest } = props
  return <Input type='time' showIcon={false} {...rest} />
}
