import { createColumnHelper } from '@tanstack/react-table'
import { useTranslation } from 'react-i18next'
import { ColumnActionProps, ILanguageLists } from './types'
import { Icon } from '@/components/atoms/icons'
import { IconButton } from '@/components/molecules/iconButton'
import { DeleteIconButton } from '@/components/tableColumns'

const columnHelper = createColumnHelper<ILanguageLists>()

export const useTableColumns = (props: ColumnActionProps) => {
  const { onDelete } = props
  const { t } = useTranslation('form')
  return [
    columnHelper.accessor((data) => data.language.value, {
      header: t('language')
    }),
    columnHelper.accessor((data) => data.languageSkills.value, {
      header: t('languageSkills')
    }),
    columnHelper.accessor('id', {
      header: t('action'),
      cell(props) {
        return <DeleteIconButton onClick={() => onDelete(props.getValue())} />
      }
    })
  ]
}
