import { ProductViewer } from '@components/organisms/productViewer'
import { IProductTemplateProps } from '@/templates/product/types.ts'

export function ProductTemplate(props: IProductTemplateProps) {
  const { product, comments } = props

  return (
    <div>
      <ProductViewer {...product} />
      <div></div>
      <div></div>
    </div>
  )
}
