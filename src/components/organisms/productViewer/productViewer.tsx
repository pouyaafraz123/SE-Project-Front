import { Button } from '@components/atoms/button'
import { addColon } from '@utils'
import clsx from 'clsx'
import { Typography } from '@components/atoms/typography'
import classes from './styles.module.scss'
import { IProduct } from '@/templates/product'
import { convertCurrency } from '@/utils/currency.ts'

export function ProductViewer(props: IProduct) {
  const { id, quantity, rating, price, detail, images, title, description } =
    props

  return (
    <div
      style={{ backgroundImage: `url(${images[0]})` }}
      className={clsx(classes.productViewer)}
    >
      <div className={clsx(classes.productViewer__backdrop)}>
        <div className={clsx(classes.productViewer__imgContainer)}>
          <img
            src={images[0]}
            alt={title}
            className={clsx(classes.productViewer__img)}
          />
        </div>
        <div className={clsx(classes.productViewer__content)}>
          <div className={clsx(classes.productViewer__topContent)}>
            <div>
              <Typography variant={'h2'}>{title}</Typography>
              <div className={clsx(classes.productViewer__details)}>
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
                <Button mode={'main'} label={'اضافه به سبد خرید'} />
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
