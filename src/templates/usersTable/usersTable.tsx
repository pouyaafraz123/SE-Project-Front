import { PageTable } from '@components/organisms/pageTable'
import { IUserTableTemplateProps } from '@/templates/usersTable/types.ts'
import { columnsUsers } from '@/templates/usersTable/columns.tsx'

export function UsersTable({
  data,
  tableParamProps,
  isLoading,
  isFetching,
  total
}: IUserTableTemplateProps) {
  if (isLoading || !data) return <div>لودینگ ...</div>

  return (
    <PageTable
      noDownload
      noSearch
      noPrint
      type={'basic'}
      title={'users'}
      total={total}
      isFetching={isFetching}
      isLoading={isLoading}
      tableProps={{ columnDef: columnsUsers, dataJSON: data }}
      {...tableParamProps}
    />
  )
}
