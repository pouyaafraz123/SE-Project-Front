import { Statistics } from '@components/organisms/statistics'
import { useTableParams } from '@components/organisms/pageTable'
import { Page } from '@components/atoms/page'
import { useLocalAdminList } from '@/api/userManagement/localAdmin'
import { LocalAdminTable } from '@/templates/userManagement/localAdmin'

export function Component() {
  const { paginationValues, searchValue, filterValues, tableProps } =
    useTableParams({})
  const { resultsPerPage, currentPage } = paginationValues

  const { data, isLoading, isFetching } = useLocalAdminList({
    variables: { page: currentPage, per_page: resultsPerPage },
    keepPreviousData: true
  })

  if (isLoading || !data) return null

  const stats = data.data.statistics
  return (
    <Page>
      <Statistics data={stats} />
      <LocalAdminTable
        data={data.data.page.list}
        total={data.data.page.total}
        isFetching={isFetching}
        isLoading={isLoading}
        tableParamProps={tableProps}
      />
    </Page>
  )
}
