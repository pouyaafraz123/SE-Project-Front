import { ICardContainerProps } from '@components/molecules/cardContainer'
import { Box } from '@components/atoms/box'
import { defaultBoxProps } from '@components/molecules/cardContainer'

/**
 * Component that wraps its children in a card container with specified props.
 *
 * @param {ICardContainerProps} props - The props for the CardContainer component.
 * @param {BoxProps} [props.boxProps=defaultBoxProps] - Additional BoxProps to apply to the container. Optional.
 * @param {ReactNode} props.children - The children to be rendered within the container.
 * @returns CardContainer The rendered CardContainer component.
 */
export function CardContainer(props: ICardContainerProps) {
  const { boxProps = defaultBoxProps, children } = props

  return (
    // Render a Box component with specified BoxProps and the provided children.
    <Box {...boxProps}>
      <div>{children}</div>
    </Box>
  )
}
