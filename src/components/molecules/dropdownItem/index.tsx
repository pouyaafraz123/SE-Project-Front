import clsx from 'clsx'
import { HtmlHTMLAttributes, PropsWithChildren } from 'react'
import classes from './styles.module.scss'

export interface IDropdownItemProps
  extends PropsWithChildren<any>,
    HtmlHTMLAttributes<HTMLDivElement> {
  children: any
  className?: string
  color?: 'error' | 'success' | 'primary' | 'warning'
}

// items component for dropdown
export default function DropdownItem({
  children,
  className,
  color,
  ...rest
}: IDropdownItemProps) {
  // render component
  return (
    <div
      {...rest}
      data-color={color}
      className={clsx([classes.menuItem, className])}
    >
      {children}
    </div>
  )
}
