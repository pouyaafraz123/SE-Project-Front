import { PageTable } from '@components/organisms/pageTable'
import { useTableColumns } from './columns'
import { IUsersTableProps } from './types'

export function UsersTable(props: IUsersTableProps) {
  const {
    data,
    isLoading,
    total,
    tableParamProps,
    isFetching,
    changeUserProps
  } = props

  const columns = useTableColumns(changeUserProps)

  if (isLoading || !data) return null // TODO: handle is loading or nodata inside of the table component

  return (
    <PageTable
      type={'basic'}
      title={'لیست کاربران'}
      total={total}
      tableProps={{ columnDef: columns, dataJSON: data }}
      isFetching={isFetching}
      {...tableParamProps}
    />
  )
}
