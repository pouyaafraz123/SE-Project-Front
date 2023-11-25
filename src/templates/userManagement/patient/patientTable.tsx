import { PageTable } from '@components/organisms/pageTable'
import { useTranslation } from 'react-i18next'
import { useTableColumns } from './patientColumns'
import { ITable } from '@/interfaces'
import { IPatientListEndpoint } from '@/api/userManagement/patient'
import { Button } from '@/components/atoms/button'
import { path } from '@/routes'

export function PatientTable(props: ITable<IPatientListEndpoint>) {
  const { data, isLoading, tableParamProps, total, isFetching } = props
  const { t } = useTranslation('common')
  const columns = useTableColumns()

  if (isLoading || !data) return null // TODO: handle is loading or nodata inside of the table component

  const actions = [
    <Button key='add' mode='main' linkTo={path.users.patientCreate.link()}>
      {t('tableActions.addPatient')}
    </Button>
  ]
  return (
    <PageTable
      actions={actions}
      type={'basic'}
      title={t('listBoxTitle.patient')}
      total={total}
      isFetching={isFetching}
      tableProps={{ columnDef: columns, dataJSON: data }}
      {...tableParamProps}
    />
  )
}
