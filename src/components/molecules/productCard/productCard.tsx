import {
  IProductCardProps,
  IProductExtraProps
} from '@components/molecules/productCard/types.ts'
import { Typography } from '@components/atoms/typography'
import clsx from 'clsx'
import classes from './styles.module.scss'
import { path } from '@/routes'
import { useNavigate } from 'react-router-dom'

export function ProductCard({
  id,
  img,
  title,
  rating,
  price,
  description,
  classname
}: IProductCardProps & IProductExtraProps) {
  const navigate = useNavigate()

  return (
    <div
      className={clsx(classes.productCard, classname)}
      onClick={() => navigate(path.common.productView.link({ id: id }))}
    >
      <img src={img} alt={title} className={clsx(classes.productCard__img)} />
      <div className={clsx(classes.productCard__bottom)}>
        <Typography variant={'h5'}>{title}</Typography>
        <div className={clsx(classes.productCard__bottomDetails)}>
          <Typography variant={'subtitle3'}>{price} تومان</Typography>
          <Typography variant={'subtitle3'}>{rating}</Typography>
        </div>
      </div>
    </div>
  )
}
