import { Link as RLink } from 'react-router-dom'
import { forwardRef } from 'react'
import { ILinkProps } from '@components/atoms/link'
import { Typography } from '@components/atoms/typography'
import clsx from 'clsx'
import classes from './styles.module.scss'

/**
 * A customized Link component that wraps React Router's Link component and
 * applies additional styling.
 *
 * @param {ILinkProps} props - The props for the Link component.
 * @param {React.Ref<HTMLAnchorElement>} ref - Forwarded ref for the anchor element.
 * @returns {JSX.Element} The rendered Link component.
 */
export const Link = forwardRef<HTMLAnchorElement, ILinkProps>(
  ({ children, fontWeight, fontSize, fontFamily, color, ...rest }, ref) => {
    return (
      // Use React Router's Link component with forwarded props and ref.
      <RLink {...rest} ref={ref}>
        {/* Render a Typography component with additional styling for the link. */}
        <Typography
          fontSize={fontSize}
          fontWeight={fontWeight}
          fontFamily={fontFamily}
          color={color}
          variant={'subtitle3'}
          className={clsx(classes.link, rest?.className)}
        >
          {children}
        </Typography>
      </RLink>
    )
  }
)

// Set the display name for the Link component.
Link.displayName = 'Link'
