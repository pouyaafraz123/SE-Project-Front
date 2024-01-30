import { BasePage } from '@pages/basePage/basePage.tsx'
import { useTableParams } from '@components/organisms/pageTable'
import { useUserTable } from '@api/users'
import { UsersTable } from '@/templates/usersTable'

export function Component() {
  const { paginationValues, searchValue, filterValues, tableProps } =
    useTableParams({})
  const { currentPage, resultsPerPage } = paginationValues

  const { data, isLoading, isFetching } = useUserTable({
    variables: {
      PageSize: resultsPerPage,
      PageIndex: currentPage
    }
  })

  return (
    <BasePage isNeedBack>
      <UsersTable
        data={data?.data?.data || []}
        total={data?.data?.total || 0}
        tableParamProps={tableProps}
        isLoading={isLoading}
        isFetching={isFetching}
      />
    </BasePage>
  )
}
