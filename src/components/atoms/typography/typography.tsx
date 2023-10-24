import { Children, PropsWithChildren, createElement } from 'react'
import { addSpaceBetween, generateTypographyClassName } from './helper'
import { TypographyProps } from './types'
import { typographies } from './variant'

/**
 * Typography Component
 *
 * This component renders text with different styles based on the props passed to it.
 *
 * It supports different types of text such as headings, paragraphs, and spans.
 *
 * The component also allows for customization of font size, font weight, and color.
 *
 * @param [props.children] - The content to be rendered within the Typography component
 *
 * @returns
 */
function Typography(props: PropsWithChildren<TypographyProps>) {
  const {
    variant = 'body',
    children,
    className,
    createSpan,
    htmlAttribute,
    ...rest
  } = props
  const typographySpec = { ...typographies[variant], ...rest }
  const generatedClassName = generateTypographyClassName(
    typographySpec,
    className
  )

  const elementType = createSpan ? 'span' : typographySpec.tag

  const childrenCount = Children.count(children)

  return createElement(
    elementType,
    { ...htmlAttribute, className: generatedClassName },
    childrenCount > 1 ? addSpaceBetween(children) : children
  )
}

export { Typography }
