import { PropsWithChildren } from 'react'
import clsx from 'clsx'
import { useSidebarStore } from '..'
import classes from './styles.module.scss'
import { CentringProps } from '.'

export function Centring(props: PropsWithChildren<CentringProps>) {
  const { className, children, ...rest } = props
  const isOpen = useSidebarStore((state) => state.isOpen)
  return (
    <div className={clsx([!isOpen && classes.centering, className])} {...rest}>
      {children}
    </div>
  )
}
