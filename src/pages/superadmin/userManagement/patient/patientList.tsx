import { Statistics } from '@components/organisms/statistics'
import { useTableParams } from '@components/organisms/pageTable'
import { Page } from '@components/atoms/page'
import { usePatientList } from '@/api/userManagement/patient'
import { PatientTable } from '@/templates/userManagement/patient'

export function Component() {
  const { searchValue, paginationValues, filterValues, tableProps } =
    useTableParams({})
  const { currentPage, resultsPerPage } = paginationValues

  const { data, isLoading, isFetching } = usePatientList({
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
      <PatientTable
        data={data.data.page.list}
        total={data.data.page.total}
        isFetching={isFetching}
        isLoading={isLoading}
        tableParamProps={tableProps}
      />
    </Page>
  )
}
