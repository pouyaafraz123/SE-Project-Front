import { HFList } from '@components/templates/hf/hfList/hfList'
import { useHFTable } from '@api/hf/getHFTable'
import { path } from '@routes/hf/path'
import { isDefinedNonZero } from '@utils'

export function Component() {
  const params = path.hfList.useParams()
  const page = isDefinedNonZero(params.values.page) || 1
  const pageSize = isDefinedNonZero(params.values.per_page) || 10 // TODO default value???

  function onPagination(page: number, pageSize: number) {
    params.set({ page: page.toString(), per_page: pageSize.toString() })
  }
  const { data, isLoading } = useHFTable({
    variables: { page, per_page: pageSize },
    keepPreviousData: true
  })

  if (isLoading || !data) return null

  return (
    <HFList
      data={data.data.list}
      page={page}
      pageSize={pageSize}
      onPagination={onPagination}
      totalPages={data.data.total / pageSize}
    />
  )
}
