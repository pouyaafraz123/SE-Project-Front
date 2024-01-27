import {
  IProductSectionProps,
  productSectionTitles
} from '@components/organisms/productSection/types.ts'
import { ContainerBox } from '@components/atoms/containerBox'
import { Swiper } from '@components/atoms/swiper'
import { ProductCard } from '@components/molecules/productCard'
import classes from './styles.module.scss'
import { path } from '@/routes'

export function ProductSection({ products, type }: IProductSectionProps) {
  const title = productSectionTitles[type]

  const getParams = () => {
    const params = new URLSearchParams()
    params.set(
      'order',
      type === 'discounted'
        ? 'Discounted'
        : type === 'new'
        ? 'Newest'
        : 'Cheapest'
    )
    console.log(params?.toString())
    return params?.toString()
  }

  return (
    <ContainerBox
      name={title}
      link={{
        to: {
          pathname: path.common.productSearch.link(),
          search: getParams()
        },
        options: { replace: true }
      }}
    >
      <div className={classes.container}>
        <Swiper>
          {products?.map((product) => {
            return (
              <ProductCard
                key={product?.id}
                {...product}
                classname={classes.product}
              />
            )
          })}
        </Swiper>
      </div>
    </ContainerBox>
  )
}
