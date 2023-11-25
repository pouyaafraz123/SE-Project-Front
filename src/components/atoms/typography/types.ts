/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  color,
  fontFamilyType,
  fontSizeType,
  fontWeightType
} from '@/constants/stylesVariables'

/**
 * default: body
 */
type variantNames =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'body'
  | 'description1'
  | 'description2'
  | 'caption1'
  | 'caption2'
  | 'caption3'
  | 'subtitle1'
  | 'subtitle2'
  | 'subtitle3'
  | 'badge'
  | 'appointment-status'
  | 'formSectionHeader'
  | 'inherit'

type tagType = 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export interface TypographyProps
  extends Partial<Omit<TypographyStyles, 'tag'>> {
  variant?: variantNames
  className?: string
  /**
   * if you set it to `true`, the returned tag element will be `span` and it do not care that you select the 'h1' variant or any other else.
   */
  createSpan?: boolean
  htmlAttribute?: React.HtmlHTMLAttributes<
    HTMLParagraphElement | HTMLSpanElement | HTMLHeadingElement
  >
}

// every property that related to classnames and we use in generateClassName function write in here
export type TypographyStyles = {
  color: color
  fontWeight: fontWeightType | 'inherit'
  fontSize: fontSizeType | 'inherit'
  fontFamily?: fontFamilyType | 'inherit'
  tag: tagType
  /**
   * display className: "d-flex" or "d-block"
   *
   * you can choose 'block' if you set the `span: true` and want to behave the span tag like a div tag
   */
  display?: 'block' | 'flex'
  /** make text center */
  center?: boolean
  disableSelect?: boolean
}

export type typographyType = Record<variantNames, TypographyStyles>
