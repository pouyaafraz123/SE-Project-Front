import { Statistics } from '@components/organisms/statistics'
import { useTableParams } from '@components/organisms/pageTable'
import { Page } from '@components/atoms/page'
import { useStaffList } from '@/api/userManagement/staff'
import { StaffTable } from '@/templates/userManagement/staff'
import { usePagination } from '@/hooks'

export function Component() {
  const { paginationValues, searchValue, filterValues, tableProps } =
    useTableParams({})
  const { resultsPerPage, currentPage } = paginationValues

  const { data, isLoading, isFetching } = useStaffList({
    variables: {
      page: currentPage,
      per_page: resultsPerPage,
      filter: searchValue,
      ...filterValues
    },
    keepPreviousData: true
  })

  if (isLoading || !data) return null
  const stats = data.data.statistics

  return (
    <Page>
      <Statistics data={stats} />
      <StaffTable
        data={data.data.page.list}
        total={data.data.page.total}
        isFetching={isFetching}
        isLoading={isLoading}
        tableParamProps={tableProps}
      />
    </Page>
  )
}
