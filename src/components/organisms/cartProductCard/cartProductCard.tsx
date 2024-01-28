import { ICartProductCardProps } from '@components/organisms/cartProductCard/types.ts'
import { Typography } from '@components/atoms/typography'
import clsx from 'clsx'
import { AddBox } from '@components/molecules/addBox'
import classes from './styles.module.scss'

export function CartProductCard({
  img,
  quantity,
  title,
  price,
  id,
  discount,
  count,
  onCountChange,
  onDelete
}: ICartProductCardProps) {
  // const [count, setCount] = useState(1)

  return (
    <div
      className={clsx(classes.productCard)}
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className={clsx(classes.productCard__container)}>
        <div className={clsx(classes.productCard__imgContainer)}>
          <img
            src={img}
            alt={title}
            className={clsx(classes.productCard__img)}
          />
        </div>
        <div className={clsx(classes.productCard__content)}>
          <div className={clsx(classes.productCard__contentHead)}>
            <Typography variant={'h2'}>{title}</Typography>
            <div className={clsx(classes.productCard__pricePlace)}>
              <Typography fontSize={'lg'} fontWeight={'bold'}>
                قیمت: {price}
              </Typography>
              {discount !== 0 && (
                <Typography
                  fontSize={'lg'}
                  fontWeight={'extra-bold'}
                  color={'danger-dark'}
                >
                  تخفیف:{' '}
                  <span className={clsx(classes.productCard__discount)}>
                    %{discount}
                  </span>
                </Typography>
              )}
            </div>
          </div>
          <div className={clsx(classes.productCard__addPart)}>
            <AddBox
              count={count}
              maxCount={quantity}
              onCountChange={(count) => onCountChange(count)}
              onDelete={() => onDelete()}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
