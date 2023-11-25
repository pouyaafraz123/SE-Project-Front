import { IHFSearchEndpoint } from '@/api/infinite'
import { Typography } from '@/components/atoms/typography'

export interface IHFPickerCardProps {
  hfInfo: IHFSearchEndpoint
  onClick?: () => void
}

export function HFPickerCard(props: IHFPickerCardProps) {
  const { hfInfo, onClick } = props
  return (
    <div onClick={onClick}>
      <Typography fontWeight='medium' fontFamily='dana' fontSize='md-high'>
        {hfInfo.name}
      </Typography>
      <Typography
        fontFamily='dana'
        fontSize='xs'
        fontWeight='regular'
        variant='caption1'
      >
        {hfInfo.type.value}
      </Typography>
    </div>
  )
}
