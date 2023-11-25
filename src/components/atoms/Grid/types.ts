import { ParseKeys } from 'i18next'

export type IGridProps = {
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
  subtitle?: ParseKeys<'form'>
  border?: 'top-solid' | 'top-gradient' | 'bottom-solid' | 'bottom-gradient'
}

export type IColumnProps = {
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

export type IFullWidthColumnProps = {
  className?: string
}

export type IButtonProps = {
  className?: string
}
