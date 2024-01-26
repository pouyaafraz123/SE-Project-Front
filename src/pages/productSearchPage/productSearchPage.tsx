import { BasePage } from '@pages/basePage/basePage.tsx'
import { useTableParams } from '@components/organisms/pageTable'
import { useProductTable } from '@api/product'
import { ProductSearchTemplate } from '@/templates/productSearchTemplate'

export function Component() {
  const { paginationValues, searchValue, filterValues, tableProps } =
    useTableParams({})
  const { currentPage, resultsPerPage } = paginationValues

  const { data, isLoading, isFetching } = useProductTable({
    variables: {
      PageIndex: currentPage,
      PageSize: resultsPerPage,
      Title: searchValue
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
      />
    </BasePage>
  )
}
