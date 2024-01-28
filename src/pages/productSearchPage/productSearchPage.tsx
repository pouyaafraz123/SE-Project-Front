import { BasePage } from '@pages/basePage/basePage.tsx'
import { useTableParams } from '@components/organisms/pageTable'
import { useProductTable } from '@api/product'
import { useState } from 'react'
import { ProductSearchTemplate } from '@/templates/productSearchTemplate'

export function Component() {
  const { paginationValues, searchValue, filterValues, tableProps } =
    useTableParams({})
  const { currentPage, resultsPerPage } = paginationValues

  const [category, setCategory] = useState('')
  const [brand, setBrand] = useState('')
  const [order, setOrder] = useState('')

  const { data, isLoading, isFetching } = useProductTable({
    variables: {
      PageIndex: currentPage,
      PageSize: resultsPerPage,
      Title: searchValue,
      CategoryId: category || undefined,
      BrandId: brand || '',
      Order: (order as 'Newest' | 'Cheapest' | 'Discounted') || undefined,
      IsDiscount: order === 'Discounted' ? true : undefined
    }
  })

  return (
    <BasePage isNeedBack>
      <ProductSearchTemplate
        data={
          data?.data?.data?.map((product) => ({
            id: product?.uuid,
            title: product?.name,
            description: '',
            price: product?.price,
            rating: product?.rating,
            img: product?.cover?.url
          })) || []
        }
        total={data?.data?.total || 0}
        tableParamProps={tableProps}
        onCategoryChange={(value) => setCategory(value)}
        onBrandChange={(value) => setBrand(value)}
        onOrderChange={(value) => setOrder(value)}
        isFetching={isFetching}
        isLoading={isLoading}
      />
    </BasePage>
  )
}
