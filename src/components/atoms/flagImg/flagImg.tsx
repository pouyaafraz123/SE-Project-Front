import { FlagImgProps } from './types'

export default function FlagImg(props: FlagImgProps) {
  const { src, width = 24, height = 24 } = props
  return (
    <div className='d-inline-flex'>
      <img alt=' ' width={width} height={height} src={src} />
    </div>
  )
}
