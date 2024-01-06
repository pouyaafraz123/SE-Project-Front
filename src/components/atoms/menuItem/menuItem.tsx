import { forwardRef, PropsWithChildren, Ref } from 'react'
import clsx from 'clsx'
import classes from './styles.module.scss'
import { ItemProps } from './types'

export const MenuItem = forwardRef(function MenuItem(
  props: PropsWithChildren<ItemProps>,
  ref: Ref<HTMLDivElement>
) {
  const { children, className, selected, ...rest } = props
  return (
    <div
      ref={ref}
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
})
