import clsx from 'clsx'
import { mergeProps } from '@utils'
import classes from './styles.module.scss'
import {
  IInfoCardProps,
  VInfoCardVariant
} from '@/components/molecules/infoCard'
import { Typography } from '@/components/atoms/typography'

/**
 * InfoCard component displays information with an icon and title.
 *
 * @param {IInfoCardProps} props - The props for the InfoCard component.
 * @param {string} props.title - The title or label for the InfoCard.
 * @param {ReactNode} props.icon - The icon to be displayed in the InfoCard.
 * @param {TInfoCardColor} props.color - The color of the InfoCard.
 * @param {number} props.value - The value to be displayed in the InfoCard.
 * @returns InfoCard The rendered InfoCard component.
 */
export function InfoCard(props: IInfoCardProps) {
  let variantProps = VInfoCardVariant[props?.variant]
  if (!variantProps) variantProps = VInfoCardVariant.default
  const { title, icon, color, value } = mergeProps(variantProps, props)

  return (
    // Render the InfoCard with specified color.
    <div data-color={color} className={clsx(classes.infoCard)}>
      <div className={clsx(classes.infoCard__iconContainer)}>
        <div className={clsx(classes.infoCard__icon)}>{icon}</div>
      </div>
      <div className={clsx(classes.infoCard__content)}>
        <div>
          {/* Render the title with specified typography and color. */}
          <Typography variant={'body'} color={'white'} fontFamily={'Morabba'}>
            {title}
          </Typography>
        </div>
        <div>
          {/* Render the value with specified typography and color. */}
          <Typography
            fontSize={'md-high'}
            fontWeight={'extra-bold'}
            color={'white'}
          >
            {value} +
          </Typography>
        </div>
      </div>
    </div>
  )
}
