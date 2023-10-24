import { PropsWithChildren, useRef } from 'react'
import clsx from 'clsx'
import classes from './styles.module.scss'
import { CollapseProps } from '.'

export function Collapse(props: PropsWithChildren<CollapseProps>) {
  const { isOpen, children, className, style, ...rest } = props

  const refContainer = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={refContainer}
      className={clsx([classes.collapse, className])}
      style={{
        maxHeight: isOpen ? refContainer.current?.scrollHeight + 'px' : '0px',
        ...style
      }}
      {...rest}
    >
      {children}
    </div>
  )
}
