import { Table } from '@components/organisms/table'
import { useState } from 'react'
import { useTableColumns } from './columns'
import { IHealthFacilityTable } from '@/api/hf'
import { Pagination } from '@/components/molecules/pagination'

interface IProps {
  data: IHealthFacilityTable[]
  isLoading?: boolean
  page: number
  totalPages: number
  pageSize: number
  onPagination: (page: number, pageSize: number) => void
}

export function HFList(props: IProps) {
  const { data, isLoading, page, totalPages, pageSize, onPagination } = props
  // const { data, isLoading } = useHFTable({
  //   variables: { page, per_page: pageSize },
  //   keepPreviousData: true
  // })

  const columns = useTableColumns()

  if (isLoading || !data) return null
  // TODO pass isFetching & noData to table
  return (
    <Table
      columnDef={columns}
      dataJSON={data}
      pagination={
        <Pagination
          totalPages={totalPages}
          currentPage={page}
          onPageChange={(page) => onPagination(page, pageSize)}
        />
      }
    />
  )
}
