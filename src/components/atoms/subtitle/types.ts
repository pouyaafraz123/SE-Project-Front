import { ParseKeys } from 'i18next'
import { HtmlHTMLAttributes } from 'react'

export interface SubtitleProps
  extends Omit<HtmlHTMLAttributes<HTMLParagraphElement>, 'color'> {
  title: ParseKeys<'form'>
}
