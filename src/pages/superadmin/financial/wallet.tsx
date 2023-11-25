import { useWalletTable, useUpdateWallet } from '@api/financial/wallet'
import { WalletTable } from '@/templates/financialManagement/patientWallet'
import { Statistics } from '@/components/organisms/statistics'
import { useTableParams } from '@/components/organisms/pageTable'
import { Page } from '@/components/atoms/page'

export function Component() {
  const { paginationValues, searchValue, filterValues, tableProps } =
    useTableParams({})
  const { currentPage, resultsPerPage } = paginationValues

  const { mutateAsync } = useUpdateWallet()

  const { data, isLoading, isFetching } = useWalletTable({
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
      <WalletTable
        mutateFn={mutateAsync}
        data={data.data.page.list}
        total={data.data.page.total}
        isLoading={isLoading}
        isFetching={isFetching}
        tableParamProps={tableProps}
      />
    </Page>
  )
}
