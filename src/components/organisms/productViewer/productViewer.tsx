import { Button } from '@components/atoms/button'
import { addColon } from '@utils'
import clsx from 'clsx'
import { Typography } from '@components/atoms/typography'
import { usePostCart } from '@api/cart'
import { notify } from '@components/atoms/notify'
import { useNavigate } from 'react-router-dom'
import classes from './styles.module.scss'
import { IProduct } from '@/templates/product'
import { convertCurrency } from '@/utils/currency.ts'
import { path } from '@/routes'

export function ProductViewer(props: IProduct) {
  const {
    id,
    quantity,
    rating,
    price,
    detail,
    images,
    cover,
    title,
    description
  } = props

  const { mutate } = usePostCart()
  const navigate = useNavigate()

  return (
    <div
      style={{ backgroundImage: `url(${cover})` }}
      className={clsx(classes.productViewer)}
    >
      <div className={clsx(classes.productViewer__backdrop)}>
        <div className={clsx(classes.productViewer__imgContainer)}>
          <img
            src={cover}
            alt={title}
            className={clsx(classes.productViewer__img)}
          />
        </div>
        <div className={clsx(classes.productViewer__content)}>
          <div className={clsx(classes.productViewer__topContent)}>
            <div>
              <Typography variant={'h2'} createSpan>
                {title}{' '}
              </Typography>
              {quantity === 0 && (
                <Typography variant={'h2'} createSpan color={'danger-dark'}>
                  (ناموجود)
                </Typography>
              )}
              <div className={clsx(classes.productViewer__details)}>
                <div className={clsx(classes.productViewer__detail)}>
                  <div>
                    <Typography variant={'h4'}>{addColon('موجودی')}</Typography>
                  </div>
                  <div>
                    <Typography variant={'h4'} fontWeight={'medium'}>
                      {quantity}
                    </Typography>
                  </div>
                </div>
                {Object.entries(detail)?.map(([key, value]) => {
                  return (
                    <div
                      key={key}
                      className={clsx(classes.productViewer__detail)}
                    >
                      <div>
                        <Typography variant={'h4'}>{addColon(key)}</Typography>
                      </div>
                      <div>
                        <Typography variant={'h4'} fontWeight={'medium'}>
                          {value}
                        </Typography>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className={clsx(classes.productViewer__featurePart)}>
              <div className={clsx(classes.productViewer__rating)}>
                <Typography variant={'h6'}>امتیاز: {rating}</Typography>
              </div>
              <div className={clsx(classes.productViewer__buyBox)}>
                <Typography variant={'body'}>{`قیمت: ${convertCurrency(
                  price
                )}`}</Typography>
                <Button
                  mode={'main'}
                  label={'اضافه به سبد خرید'}
                  onClick={() => {
                    if (quantity === 0) {
                      notify.error({ text: 'محصول ناموجود است' })
                      return
                    }
                    mutate(
                      { productUuid: id, quantity: 1 },
                      {
                        onSuccess: () => {
                          notify.success({
                            title: 'سبد خرید',
                            text: 'به سبد خرید اضافه شد'
                          })
                          navigate(path.common.cart.link())
                        }
                      }
                    )
                  }}
                />
              </div>
            </div>
          </div>
          <div className={clsx(classes.productViewer__description)}>
            <div>{description}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
