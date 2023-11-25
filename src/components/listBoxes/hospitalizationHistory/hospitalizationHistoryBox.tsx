import { ListBox } from '@components/molecules/listBox'
import { IHospitalizationListBoxProps } from '@components/listBoxes/hospitalizationHistory/types.ts'
import { useHospitalizationColumns } from '@components/listBoxes/hospitalizationHistory/columns.tsx'

export function HospitalizationHistoryBox(props: IHospitalizationListBoxProps) {
  const { hospitalizationList, onDelete } = props

  const columnDef = useHospitalizationColumns({ onDelete })

  return (
    <ListBox
      title={'hospitalizationHistory'}
      columnDef={columnDef}
      dataJSON={hospitalizationList}
    />
  )
}
