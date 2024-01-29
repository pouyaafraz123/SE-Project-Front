import clsx from 'clsx'
import { IconProps } from './types'

const path = [1, 2, 3, 4, 5, 6, 7, 8]

export function Icon(props: IconProps) {
  const {
    type = 'linear',
    name,
    fontSize = 'lg',
    color = 'inherit',
    fontWeight = 'medium',
    className,
    onClick
  } = props

  return (
    <span
      style={{ wordBreak: 'keep-all' }}
      className={clsx([
        `icon-${type}_${name}`,
        `color-${color}`,
        `just-fs-${fontSize}`,
        `fw-${fontWeight}`,
        className
      ])}
      onClick={onClick}
      // style={getStyles(fontSize, color)}
    >
      {type === 'bold-duotone'
        ? path.map((item) => (
            <span
              key={item}
              className={clsx([`path${item}`, `color-${color}`])}
            ></span>
          ))
        : null}
    </span>
  )
}
