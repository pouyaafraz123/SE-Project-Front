import { PropsWithChildren } from 'react'
import clsx from 'clsx'
import { Subtitle } from '../subtitle'
import classes from './styles.module.scss'
import {
  IButtonProps,
  IColumnProps,
  IFullWidthColumnProps,
  IGridProps
} from '.'

function Grid(props: PropsWithChildren<IGridProps>) {
  const { children, flowDense, className, subtitle, border } = props
  return (
    <div
      className={clsx([
        classes.container,
        border === 'bottom-gradient' && ['border-gr-bottom', 'mb-0', 'pb-4m1'],
        border === 'top-gradient' && ['border-gr-top', 'mt-0', 'pt-4m1'],
        border === 'bottom-solid' && ['border-bottom', 'mb-0', 'pb-4m1'],
        border === 'top-solid' && ['border-top', 'mt-0', 'pt-4m1']
      ])}
    >
      {subtitle && (
        <Subtitle
          title={subtitle}
          className={clsx([classes.fullWidthColumn, 'pb-4m1'])}
        />
      )}
      <div
        className={clsx([
          classes.grid,
          flowDense && classes.gridFlowDense,
          className
        ])}
      >
        {children}
      </div>
    </div>
  )
}

function Column(props: PropsWithChildren<IColumnProps>) {
  const { children, doubleWidth, startFromNextRow, gap, className } = props
  return (
    <div
      className={clsx([
        doubleWidth && classes.bigColumn,
        startFromNextRow && classes.startFromNextRow,
        gap && classes.gap20,
        className
      ])}
    >
      {children}
    </div>
  )
}

function FullWidthColumn(props: PropsWithChildren<IFullWidthColumnProps>) {
  const { className, children } = props
  return (
    <div className={clsx([classes.fullWidthColumn, className])}>{children}</div>
  )
}

function Button(props: PropsWithChildren<IButtonProps>) {
  const { className, children } = props
  return <div className={clsx([classes.gridButton, className])}>{children}</div>
}

Grid.Column = Column
Grid.Button = Button
Grid.FullWidthColumn = FullWidthColumn
export { Grid }
