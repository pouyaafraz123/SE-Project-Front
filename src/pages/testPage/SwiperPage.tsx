import { InfoCard, TInfoCardColor } from '@components/molecules/infoCard'
import { Swiper } from '@components/atoms/swiper'

export function SwiperPage() {
  const swiperCount = Array.from({ length: 20 }, () => 'a')

  const colors: TInfoCardColor[] = [
    'danger',
    'success',
    'warning',
    'primary',
    'bondi-blue',
    'royal-blue'
  ]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {swiperCount?.map((_, index) => {
        const arr: string[] = Array.from({ length: index + 1 }, () => 'a')
        return (
          <Swiper key={index + 'S'}>
            {arr?.map((_, index2) => {
              return (
                <InfoCard
                  variant={'appointment-main'}
                  color={colors[(index2 + index) % colors.length]}
                  value={index2 + 1}
                  key={index2 + arr?.length + index}
                />
              )
            })}
          </Swiper>
        )
      })}
    </div>
  )
}
