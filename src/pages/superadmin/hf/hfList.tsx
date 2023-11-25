import { useHFTable } from '@api/hf/getHFTable'
import { Page } from '@components/atoms/page'
import { useTableParams } from '@components/organisms/pageTable'
import { HFTable } from '@/templates/hf/hfList'
import { Statistics } from '@/components/organisms/statistics'

export function Component() {
  const { paginationValues, searchValue, filterValues, tableProps } =
    useTableParams({})
  const { currentPage, resultsPerPage } = paginationValues

  const { data, isLoading, isFetching } = useHFTable({
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
      <HFTable
        data={data.data.page.list}
        total={data.data.page.total}
        isLoading={isLoading}
        isFetching={isFetching}
        tableParamProps={tableProps}
      />
    </Page>
  )
}
