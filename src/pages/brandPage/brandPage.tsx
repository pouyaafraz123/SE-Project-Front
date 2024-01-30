import { BasePage } from '@pages/basePage/basePage.tsx'
import { useTableParams } from '@components/organisms/pageTable'
import { useBrands } from '@api/brands'
import { BrandTableTemplate } from '@/templates/brands'

export function Component() {
  const { paginationValues, searchValue, filterValues, tableProps } =
    useTableParams({})
  const { currentPage, resultsPerPage } = paginationValues

  const { data, isLoading, isFetching } = useBrands({
    variables: {
      PageSize: resultsPerPage,
      PageIndex: currentPage
    }
  })

  return (
    <BasePage isNeedBack>
      <BrandTableTemplate
        data={data?.data?.data || []}
        total={data?.data?.total || 0}
        tableParamProps={tableProps}
        isLoading={isLoading}
        isFetching={isFetching}
      />
    </BasePage>
  )
}
