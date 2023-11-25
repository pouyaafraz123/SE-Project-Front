import { PageTable } from '@components/organisms/pageTable'
import { useTableColumns } from './staffColumns'
import { ITable } from '@/interfaces'
import { Table } from '@/components/organisms/table'
import { Pagination } from '@/components/molecules/pagination'
import { IStaffListEndpoint } from '@/api/userManagement/staff'

export function StaffTable(props: ITable<IStaffListEndpoint>) {
  const { data, isLoading, total, tableParamProps, isFetching } = props

  const columns = useTableColumns()

  if (isLoading || !data) return null // TODO: handle is loading or nodata inside of the table component

  return (
    <PageTable
      type={'basic'}
      title={'لیست کارکنان'}
      total={total}
      tableProps={{ columnDef: columns, dataJSON: data }}
      isFetching={isFetching}
      {...tableParamProps}
    />
  )
}
