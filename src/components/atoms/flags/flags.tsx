import clsx from 'clsx'
import { FlagProps } from './types'

export function Flag(props: FlagProps) {
  const { country } = props

  return <span className={`fi fi-${country}`}></span>
}
