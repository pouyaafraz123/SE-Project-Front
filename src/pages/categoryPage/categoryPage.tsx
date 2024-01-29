import { BasePage } from '@pages/basePage/basePage.tsx'
import { useTableParams } from '@components/organisms/pageTable'
import { useCategories } from '@api/category'
import { CategoryTableTemplate } from '@/templates/category'

export function Component() {
  const { paginationValues, searchValue, filterValues, tableProps } =
    useTableParams({})
  const { currentPage, resultsPerPage } = paginationValues

  const { data, isLoading, isFetching } = useCategories({
    variables: {
      PageSize: resultsPerPage,
      PageIndex: currentPage
    }
  })

  return (
    <BasePage isNeedBack>
      <CategoryTableTemplate
        data={data?.data?.data || []}
        total={data?.data?.total || 0}
        tableParamProps={tableProps}
        isLoading={isLoading}
        isFetching={isFetching}
      />
    </BasePage>
  )
}
