import { ListBox } from '@components/molecules/listBox'
import { IIllnessListBoxProps, useIllnessColumns } from './index'

export function IllnessesHistoryBox(props: IIllnessListBoxProps) {
  const { illnessList, onDelete } = props

  const columnDef = useIllnessColumns({ onDelete })

  return (
    <ListBox
      title={'history_of_illnesses'}
      columnDef={columnDef}
      dataJSON={illnessList}
    />
  )
}
