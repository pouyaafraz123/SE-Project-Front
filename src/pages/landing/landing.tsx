import { useProductTable } from '@api/product'
import { useBannerTable } from '@api/banner'
import { useCategories } from '@api/category'
import { Landing } from '@/templates/landing'
import { BasePage } from '@pages/basePage/basePage.tsx'

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
            id: i?.name,
            title: i?.name,
            bannerUrl:
              'https://cdn2.vectorstock.com/i/1000x1000/53/56/grunge-black-category-word-square-rubber-seal-vector-30495356.jpg'
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
