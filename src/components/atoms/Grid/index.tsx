import { PropsWithChildren } from 'react'
import clsx from 'clsx'
import classes from './styles.module.scss'

interface IGridProps extends PropsWithChildren<any> {
  /**
   * If you want to leave no spaces, set the value of this field to true.
   *
   * اگر ببیند یک جای خالی در سطر های بالایی وجود دارد که یک فیلد میتواند در آن جای گیرد،ترتیب را به هم میزند و فیلد را در آن جای میدهد.
   *
   * for more information see the https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow
   *
   * # Note: Don't use this in most cases
   */
  flowDense?: boolean
  className?: string
}

function Grid({ children, flowDense, className }: IGridProps) {
  return (
    <div
      className={clsx([
        classes.grid,
        flowDense && classes.gridFlowDense,
        className
      ])}
    >
      {children}
    </div>
  )
}

interface IColumnProps extends PropsWithChildren<any> {
  /**
   * If you want to double the width of this column, set the value of `doubleWidth` to `true`
   */
  doubleWidth?: boolean
  /**
   * If you want this column not to follow the previous column and appear in the next row, set this value to true.
   */
  startFromNextRow?: boolean
  gap?: boolean
  className?: string
}

function Column({
  children,
  doubleWidth,
  startFromNextRow,
  gap,
  className
}: IColumnProps) {
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

interface IFullWidthColumnProps extends PropsWithChildren<any> {
  className?: string
}

function FullWidthColumn({ className, children }: IFullWidthColumnProps) {
  return (
    <div className={clsx([classes.fullWidthColumn, className])}>{children}</div>
  )
}

interface IButtonProps extends PropsWithChildren<any> {
  className?: string
}
function Button({ className, children }: IButtonProps) {
  return <div className={clsx([classes.gridButton, className])}>{children}</div>
}

Grid.Column = Column
Grid.Button = Button
/**
 * This component should not wrapped in `Grid` component.
 * It should be outside of it.
 */
Grid.FullWidthColumn = FullWidthColumn
export { Grid }
