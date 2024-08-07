import { useProduct } from '@api/product'
import { useParams } from 'react-router-dom'
import { IProductViewParams } from '@routes/commonRoutes/path.ts'
import { IRouteParams } from '@routes/types.ts'
import { BasePage } from '@pages/basePage/basePage.tsx'
import { ProductTemplate } from '@/templates/product'
import { useComments, usePostComment } from '@/api/comments'

export function Component() {
  const { id } = useParams<IRouteParams<IProductViewParams>>()

  const { data } = useProduct({
    variables: {
      id: id!
    },
    enabled: !!id
  })
  const { data: commentsData } = useComments({
    variables: {
      id: id!,
      PageSize: 1000,
      PageIndex: 1
    },
    enabled: !!id
  })
  const { mutate } = usePostComment()
  const product = data?.data

  return (
    <BasePage isNeedBack noPadding>
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
        comments={commentsData?.data?.data || []}
        onPostComment={(comment) =>
          mutate({
            rating: 0,
            comment: comment,
            id: id || ''
          })
        }
      />
    </BasePage>
  )
}
