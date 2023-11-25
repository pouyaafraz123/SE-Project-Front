import { PageTable } from '@components/organisms/pageTable'
import { useTranslation } from 'react-i18next'
import { useTableColumns } from './doctorColumns'
import { ITable } from '@/interfaces'
import { IDoctorListEndpoint } from '@/api/userManagement/doctor'
import { Button } from '@/components/atoms/button'
import { path } from '@/routes'

export function DoctorTable(props: ITable<IDoctorListEndpoint>) {
  const { data, isLoading, tableParamProps, total, isFetching } = props
  const { t } = useTranslation('common')
  const columns = useTableColumns()

  if (isLoading || !data) return null // TODO: handle is loading or nodata inside of the table component

  const actions = [
    <Button key='add' mode='main' linkTo={path.users.doctorCreate.link()}>
      {t('tableActions.addDoctor')}
    </Button>
  ]
  return (
    <PageTable
      actions={actions}
      type={'basic'}
      title={t('listBoxTitle.doctor')}
      total={total}
      isFetching={isFetching}
      tableProps={{
        columnDef: columns,
        dataJSON: data
      }}
      {...tableParamProps}
    />
  )
}
