import { Statistics } from '@components/organisms/statistics'
import { useTableParams } from '@components/organisms/pageTable'
import { Page } from '@components/atoms/page'
import { useDoctorList } from '@/api/userManagement/doctor'
import { DoctorTable } from '@/templates/userManagement/doctor'
import { usePagination } from '@/hooks'

export function Component() {
  const { searchValue, paginationValues, filterValues, tableProps } =
    useTableParams({})
  const { resultsPerPage, currentPage } = paginationValues

  const { data, isLoading, isFetching } = useDoctorList({
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
  console.log(stats)

  return (
    <Page>
      <Statistics data={stats} />
      <DoctorTable
        data={data.data.page.list}
        total={data.data.page.total}
        isFetching={isFetching}
        isLoading={isLoading}
        tableParamProps={tableProps}
      />
    </Page>
  )
}
