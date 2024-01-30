import { ProductViewer } from '@components/organisms/productViewer'
import classes from './styles.module.scss'
import { IProductTemplateProps } from '@/templates/product/types.ts'
import { ContainerBox } from '@/components/atoms/containerBox'

export function ProductTemplate(props: IProductTemplateProps) {
  const { product, comments } = props

  return (
    <div>
      <ProductViewer {...product} />
      {product?.images?.length > 0 && (
        <div className={classes.gallery}>
          <ContainerBox name={'گالری'} link={{ to: '' }}>
            <div className={classes.container}>
              {product?.images?.map((image) => {
                return (
                  <img
                    key={image}
                    src={image}
                    alt={product?.title}
                    className={classes.gallery__images}
                  />
                )
              })}
            </div>
          </ContainerBox>
        </div>
      )}
      <div></div>
    </div>
  )
}
