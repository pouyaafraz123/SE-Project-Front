import { Statistics } from '@components/organisms/statistics'
import { useTableParams } from '@components/organisms/pageTable'
import { Page } from '@components/atoms/page'
import { useNavigate } from 'react-router-dom'
import { useUsersList } from '@/api/userManagement/users'
import { UsersTable } from '@/templates/userManagement/users'
import { usePagination } from '@/hooks'
import { useChangeUserStatus } from '@/api/userManagement/users/changeUserStatus'
import { path } from '@/routes'

export function Component() {
  const { searchValue, paginationValues, filterValues, tableProps } =
    useTableParams({})
  const { resultsPerPage, currentPage } = paginationValues

  const { data, isLoading, isFetching, refetch } = useUsersList({
    variables: {
      page: currentPage,
      per_page: resultsPerPage,
      filter: searchValue
    },
    keepPreviousData: true
  })

  const navigate = useNavigate()

  const { mutateAsync, isLoading: ChangeUserIsLoading } = useChangeUserStatus({
    onSuccess(data, variables, context) {
      console.log('asdasd')

      refetch()
    },
    onError(error, variables) {
      // if no financial rule is defined go to rule edit page
      if (error.response?.status == 303)
        navigate(path.financial.edit.link(variables.id))
    }
  })

  if (isLoading || !data) return null

  const stats = data.data.statistics
  return (
    <Page>
      <Statistics data={stats} />
      <UsersTable
        data={data.data.page.list}
        total={data.data.page.total}
        isFetching={isFetching}
        isLoading={isLoading}
        tableParamProps={tableProps}
        changeUserProps={{
          isLoading: ChangeUserIsLoading,
          mutateFn: mutateAsync
        }}
      />
    </Page>
  )
}
