import {
  IProductSectionProps,
  productSectionTitles
} from '@components/organisms/productSection/types.ts'
import { ContainerBox } from '@components/atoms/containerBox'
import { Swiper } from '@components/atoms/swiper'
import { ProductCard } from '@components/molecules/productCard'
import classes from './styles.module.scss'

export function ProductSection({ products, type }: IProductSectionProps) {
  const title = productSectionTitles[type]

  return (
    <ContainerBox name={title} link={type}>
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
