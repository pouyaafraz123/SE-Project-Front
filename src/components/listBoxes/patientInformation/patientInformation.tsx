import { useTableColumns } from './columns'
import { PatientInformationProps } from '.'
import { ListBox } from '@/components/molecules/listBox'

export function PatientInformation(props: PatientInformationProps) {
  const { data, showExperiments } = props
  const columnDef = useTableColumns({ showExperiments })
  return (
    <ListBox
      title='infoSubtitle.patient'
      iconName='user-rounded'
      showRow={false}
      columnDef={columnDef}
      dataJSON={Array(data)}
    />
  )
}
