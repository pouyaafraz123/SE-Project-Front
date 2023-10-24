import { HtmlHTMLAttributes } from 'react'

export interface CollapseProps extends HtmlHTMLAttributes<HTMLDivElement> {
  isOpen: boolean
}
