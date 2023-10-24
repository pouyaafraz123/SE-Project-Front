import { SVGProps } from 'react'
import { ReactComponent as TickLinearSVG } from '@/assets/icons/linear/tick.svg'

export function TickLinear(props: SVGProps<SVGSVGElement>) {
  return <TickLinearSVG data-variant='linear' {...props} />
}
