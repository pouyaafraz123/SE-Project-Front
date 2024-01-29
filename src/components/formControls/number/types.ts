import { InputProps } from '..'

export interface NumberInputProps extends InputProps<number> {}

export type NumberArrowIconProps = {
  arrowUpOnClick: () => void
  arrowDownOnClick: () => void
}
