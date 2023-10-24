import clsx from 'clsx'
import classes from './styles.module.scss'
import { ColorSchemaProps } from '.'

export default function ColorSchema(props: ColorSchemaProps) {
  const { color, isSelected, className, ...rest } = props
  return (
    <div
      className={clsx([
        classes.colorSchemaCircle,
        isSelected && classes.selectedSchema,
        className
      ])}
      {...rest}
    >
      <div className={classes.colorSchema} data-color={color}></div>
    </div>
  )
}
