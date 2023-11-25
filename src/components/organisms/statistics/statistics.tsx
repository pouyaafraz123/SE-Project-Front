import { IStatisticsProps } from './types'
import { Swiper } from '@/components/atoms/swiper'
import { InfoCard } from '@/components/molecules/infoCard'

export function Statistics(props: IStatisticsProps) {
  return (
    <Swiper>
      {props.data.map((data, index) => (
        <InfoCard
          key={index}
          value={data.value}
          variant={data.key}
          title={data.name}
        />
      ))}
    </Swiper>
  )
}
