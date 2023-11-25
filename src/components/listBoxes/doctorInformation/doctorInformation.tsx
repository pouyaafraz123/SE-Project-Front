import { useTableColumns } from './columns'
import { DoctorInformationProps } from '.'
import { ListBox } from '@/components/molecules/listBox'

export function DoctorInformation(props: DoctorInformationProps) {
  const { data } = props
  const columnDef = useTableColumns()
  return (
    <ListBox
      title='infoSubtitle.doctor'
      iconName='user-rounded'
      showRow={false}
      columnDef={columnDef}
      dataJSON={Array(data)}
    />
  )
}
