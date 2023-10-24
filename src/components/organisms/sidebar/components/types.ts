import { HtmlHTMLAttributes } from 'react'

export interface HiddenBoxProps extends HtmlHTMLAttributes<HTMLDivElement> {
  /** By default is true */
  returnNull?: boolean
}

export interface ColorSchemaProps extends HtmlHTMLAttributes<HTMLDivElement> {
  color: 'royal' | 'bondi' | 'gold'
  isSelected: boolean
}
export interface CentringProps extends HtmlHTMLAttributes<HTMLDivElement> {}
