import clsx from 'clsx'
import { HtmlHTMLAttributes, PropsWithChildren } from 'react'

export interface IDropdownProps
  extends PropsWithChildren<any>,
    HtmlHTMLAttributes<HTMLDivElement> {
  children: [JSX.Element, JSX.Element]
  anchor: 'top' | 'bottom' | 'left' | 'right'
  className?: string
}

// dropdown container for displaying item in dropdown form
export function Dropdown({
  children,
  anchor,
  className,
  ...rest
}: IDropdownProps) {
  // render component
  return (
    <div
      className={clsx([
        anchor === 'left' && 'd-inline-flex flex-row-reverse',
        anchor === 'right' && 'd-inline-flex w-100',
        anchor === 'top' && 'd-flex flex-column-reverse',
        anchor === 'bottom' && 'd-block',
        className
      ])}
      {...rest}
    >
      {children}
    </div>
  )
}
