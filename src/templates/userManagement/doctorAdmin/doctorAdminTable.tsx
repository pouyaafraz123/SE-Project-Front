import { PageTable } from '@components/organisms/pageTable'
import { useTableColumns } from './doctorAdminColumns'
import { ITable } from '@/interfaces'
import { Table } from '@/components/organisms/table'
import { Pagination } from '@/components/molecules/pagination'
import { IDoctorAdminListEndpoint } from '@/api/userManagement/doctorAdmin'

export function DoctorAdminTable(props: ITable<IDoctorAdminListEndpoint>) {
  const { data, isLoading, total, tableParamProps, isFetching } = props

  const columns = useTableColumns()

  if (isLoading || !data) return null // TODO: handle is loading or nodata inside of the table component

  return (
    <PageTable
      type={'basic'}
      title={'لیست دکتر ادمین ها'}
      total={total}
      isFetching={isFetching}
      tableProps={{ columnDef: columns, dataJSON: data }}
      {...tableParamProps}
    />
  )
}
