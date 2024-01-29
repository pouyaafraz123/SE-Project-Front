import { FlagImgProps } from './types'
import { Typography } from '@components/atoms/typography'

export default function FlagImg(props: FlagImgProps) {
  const { src, width = 24, height = 24 } = props
  return (
    <div className='d-inline-flex'>
      {src ? (
        <img alt=' ' width={width} height={height} src={src} />
      ) : (
        <Typography>کد</Typography>
      )}
    </div>
  )
}
