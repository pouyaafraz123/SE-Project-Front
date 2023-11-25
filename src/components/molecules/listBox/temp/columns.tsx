import { createColumnHelper } from '@tanstack/react-table'
import { IconButton } from '../../iconButton'
import { dataType } from './type'
import { Icon } from '@/components/atoms/icons'

const columnHelper = createColumnHelper<dataType>()
export const listBoxColumnDef = [
  columnHelper.accessor('language', { header: 'زبان' }),
  columnHelper.accessor('languageFluency', { header: 'مهارت در زبان' }),
  columnHelper.display({
    header: 'عملیات',
    cell(props) {
      return (
        <IconButton
          icon={<Icon name='trash-bin-trash' color='danger-main' />}
          noTooltip
          transparent
          label=''
        />
      )
    }
  })
]
