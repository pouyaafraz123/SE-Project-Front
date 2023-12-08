import clsx from 'clsx'
import { IProductSliderProps } from '@components/organisms/productSlider/types.ts'
import { Swiper, SwiperSlide } from 'swiper/react'
import {
  Autoplay,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
  Parallax
} from 'swiper/modules'
import { Typography } from '@components/atoms/typography'
import classes from './syles.module.scss'
import 'swiper/swiper-bundle.css'

export function ProductSlider(props: IProductSliderProps) {
  const { items } = props

  return (
    <div className={clsx(classes.productSlider)}>
      <Swiper
        modules={[
          Autoplay,
          Keyboard,
          Mousewheel,
          Navigation,
          Pagination,
          Parallax
        ]}
        pagination={{
          enabled: true
        }}
        autoplay={true}
        loop={true}
        navigation={{ enabled: true }}
        slidesPerView={4}
        parallax={{ enabled: true }}
        speed={700}
      >
        {items?.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <div
                style={{ backgroundImage: `url(${item?.img})` }}
                className={clsx(classes.productSlider__itemContainer)}
              >
                <div className={clsx(classes.productSlider__itemBackdrop)}>
                  <Typography variant={'h2'} color={'white'}>
                    {item.title}
                  </Typography>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
