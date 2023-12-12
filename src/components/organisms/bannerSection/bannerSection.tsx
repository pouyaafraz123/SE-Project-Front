import clsx from 'clsx'
import { useNavigate } from 'react-router-dom'
import classes from './styles.module.scss'
import { IBannerSectionProps } from '.'

export function BannerSection({ banners }: IBannerSectionProps) {
  const navigate = useNavigate()
  return (
    <div className={clsx(classes.bannerPlace)}>
      {banners?.map((banner, index) => (
        <div
          key={index}
          onClick={() => navigate(banner?.link)}
          className={clsx(classes.bannerPlace__bannerContainer)}
        >
          <img
            src={banner?.img}
            alt={'Banner'}
            className={clsx(classes.bannerPlace__bannerImg)}
          />
        </div>
      ))}
    </div>
  )
}
