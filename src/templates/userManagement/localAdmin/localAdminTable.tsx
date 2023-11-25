import { PageTable } from '@components/organisms/pageTable'
import { useTableColumns } from './localAdminColumns'
import { ILocalAdminListEndpoint } from '@/api/userManagement/localAdmin'
import { ITable } from '@/interfaces'
import { Table } from '@/components/organisms/table'
import { Pagination } from '@/components/molecules/pagination'

export function LocalAdminTable(props: ITable<ILocalAdminListEndpoint>) {
  const { data, isLoading, isFetching, tableParamProps, total } = props

  const columns = useTableColumns()

  if (isLoading || !data) return null // TODO: handle is loading or nodata inside of the table component

  // TODO pass isFetching & noData to table
  return (
    <PageTable
      type={'basic'}
      title={'لیست لوکال ادمین ها'}
      total={total}
      isFetching={isFetching}
      tableProps={{ columnDef: columns, dataJSON: data }}
      {...tableParamProps}
    />
  )
}
