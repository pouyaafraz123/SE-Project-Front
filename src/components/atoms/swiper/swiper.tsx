import {
  Swiper as SwiperComponent,
  SwiperSlide as SwiperSlideComponent
} from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { ISwiperProps } from '@components/atoms/swiper/types.ts'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import classes from './styles.module.scss'
import 'swiper/swiper-bundle.css'

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
      slidesPerView={'auto'}
      autoplay={true}
      modules={[Autoplay]}
      loop
    >
      {items?.map((item, index) => {
        return (
          <SwiperSlideComponent key={index} className={classes.slide}>
            {item}
          </SwiperSlideComponent>
        )
      })}
    </SwiperComponent>
  )
}
