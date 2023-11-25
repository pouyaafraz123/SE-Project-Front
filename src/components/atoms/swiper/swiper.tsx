import {
  Swiper as SwiperComponent,
  SwiperSlide as SwiperSlideComponent
} from 'swiper/react'
import { FreeMode } from 'swiper/modules'
import 'swiper/css/free-mode'
import 'swiper/css'
import { ISwiperProps } from '@components/atoms/swiper/types.ts'
import { useMemo } from 'react'
import './styles.module.scss'
import { useTranslation } from 'react-i18next'

export function Swiper({ children }: ISwiperProps) {
  const { i18n } = useTranslation()
  const items = useMemo(() => {
    if (Array.isArray(children)) {
      return children
    }
    return [children]
  }, [children])

  return (
    <SwiperComponent
      style={{ width: '100%' }}
      freeMode={true}
      spaceBetween={20}
      slidesPerView={'auto'}
      modules={[FreeMode]}
    >
      {items?.map((item, index) => {
        return (
          <SwiperSlideComponent
            key={index}
            style={{
              width: `${96 / items?.length}%`,
              minWidth: '15.125rem'
            }}
          >
            {item}
          </SwiperSlideComponent>
        )
      })}
    </SwiperComponent>
  )
}
