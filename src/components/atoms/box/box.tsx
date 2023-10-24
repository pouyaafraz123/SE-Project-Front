import { PropsWithChildren, Ref, forwardRef } from 'react'
import clsx from 'clsx'
import classes from './styles.module.scss'
import { BoxProps } from '.'

export const Box = forwardRef(function Box(
  props: PropsWithChildren<BoxProps>,
  ref: Ref<HTMLDivElement>
) {
  const {
    px,
    py,
    radius,
    borderNone,
    shadow,
    className,
    w100,
    borderStyle = 'solid',
    children,
    backgroundColor = 'primary-background',
    borderColor = 'border-main',
    ...htmlAttribute
  } = props
  return (
    <div
      ref={ref}
      className={clsx([
        `px-${px}`,
        `py-${py}`,
        `rounded-${radius}`,
        `border-style-${borderStyle}`,
        `bg-color-${backgroundColor}`,
        `border-color-${borderColor}`,
        w100 ? 'w-100' : '',
        borderNone ? '' : classes.border,
        shadow ? classes.shadow : '',
        className
      ])}
      {...htmlAttribute}
    >
      {children}
    </div>
  )
})
