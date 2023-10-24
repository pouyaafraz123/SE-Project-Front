import { PropsWithChildren } from 'react'
import clsx from 'clsx'
import classes from './styles.module.scss'
import { ItemProps } from './types'

export function MenuItem(props: PropsWithChildren<ItemProps>) {
  const { children, className, selected, ...rest } = props
  return (
    <div
      className={clsx([
        classes.item,
        selected ? classes.selected : '',
        className
      ])}
      {...rest}
    >
      {children}
    </div>
  )
}
