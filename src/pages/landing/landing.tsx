import { useProductTable } from '@api/product'
import { useBannerTable } from '@api/banner'
import { useCategories } from '@api/category'
import { BasePage } from '@pages/basePage/basePage.tsx'
import { Landing } from '@/templates/landing'

export function Component() {
  const { data: bannerProducts } = useProductTable({
    variables: {
      Order: 'Newest',
      PageSize: 10,
      PageIndex: 1
    }
  })

  const { data: newProducts } = useProductTable({
    variables: {
      Order: 'Newest',
      PageSize: 10,
      PageIndex: 1
    }
  })

  const { data: amazingProduct } = useProductTable({
    variables: {
      Order: 'Cheapest',
      PageSize: 10,
      PageIndex: 1
    }
  })

  const { data: discountedProduct } = useProductTable({
    variables: {
      IsDiscount: true,
      PageSize: 10,
      PageIndex: 1
    }
  })

  const { data: banners } = useBannerTable({
    variables: {
      PageIndex: 1,
      PageSize: 10
    }
  })

  const { data: categories } = useCategories({
    variables: {
      PageIndex: 1,
      PageSize: 10
    }
  })

  return (
    <BasePage>
      <Landing
        bannerProducts={{
          items:
            bannerProducts?.data?.data?.map((i) => ({
              img: i?.cover?.url,
              id: i?.uuid,
              title: i?.name
            })) || []
        }}
        newProducts={
          newProducts?.data?.data?.map((i) => ({
            img: i?.cover?.url,
            id: i?.uuid,
            rating: i?.rating,
            price: i?.price,
            title: i?.name,
            description: ''
          })) || []
        }
        amazingProducts={
          amazingProduct?.data?.data?.map((i) => ({
            img: i?.cover?.url,
            id: i?.uuid,
            rating: i?.rating,
            price: i?.price,
            title: i?.name,
            description: ''
          })) || []
        }
        discountedProducts={
          discountedProduct?.data?.data?.map((i) => ({
            img: i?.cover?.url,
            id: i?.uuid,
            rating: i?.rating,
            price: i?.price,
            title: i?.name,
            description: ''
          })) || []
        }
        categories={
          categories?.data?.data?.map((i) => ({
            id: i?.uuid,
            title: i?.name,
            bannerUrl:
              'https://files.virgool.io/upload/users/3239/posts/silsu6rfdea9/yu8fghqbaecj.jpeg'
          })) || []
        }
        banners={
          banners?.data?.data?.map((i) => ({ img: i?.file?.url, link: '' })) ||
          []
        }
      />
    </BasePage>
  )
}
