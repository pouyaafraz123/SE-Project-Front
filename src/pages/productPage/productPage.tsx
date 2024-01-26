import { useProduct } from '@api/product'
import { useParams } from 'react-router-dom'
import { ProductTemplate } from '@/templates/product'
import { IProductViewParams } from '@routes/commonRoutes/path.ts'
import { IRouteParams } from '@routes/types.ts'

export function Component() {
  const { id } = useParams<IRouteParams<IProductViewParams>>()

  const { data } = useProduct({
    variables: {
      id: id!
    },
    enabled: !!id
  })

  const product = data?.data

  return (
    <ProductTemplate
      product={{
        id: product?.uuid || '',
        quantity: product?.quantity || 0,
        price: product?.price || 0,
        description: product?.description || '',
        detail: product?.detail ? JSON.parse(product?.detail) : {},
        cover: product?.cover?.url || '',
        images: product?.galleryImages?.map((i) => i?.url) || [],
        rating: product?.rating || 0,
        title: product?.name || ''
      }}
      comments={[]}
    />
  )
}
