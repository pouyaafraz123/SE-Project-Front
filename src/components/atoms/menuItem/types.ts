import { HtmlHTMLAttributes } from 'react'

export interface ItemProps extends HtmlHTMLAttributes<HTMLDivElement> {
  selected?: boolean
}
