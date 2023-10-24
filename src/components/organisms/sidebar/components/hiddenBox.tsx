import { PropsWithChildren } from 'react'
import clsx from 'clsx'
import { useSidebarStore } from '..'
import classes from './styles.module.scss'
import { HiddenBoxProps } from '.'

export function HiddenBox(props: PropsWithChildren<HiddenBoxProps>) {
  const { children, className, returnNull = true, ...rest } = props
  const isOpen = useSidebarStore((state) => state.isOpen)

  if (!isOpen && returnNull) return null

  return (
    <div
      className={clsx([
        classes.hiddenBox,
        !isOpen ? classes.hide : '',
        className
      ])}
      {...rest}
    >
      {children}
    </div>
  )
}
