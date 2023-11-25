import { ParseKeys } from 'i18next'
import { RowData } from '@tanstack/react-table'
import { TableProps } from '@/components/organisms/table/types'
import { iconNameType } from '@/components/atoms/icons'
import { Optional } from '@/utils/typeTools'

export interface ListBoxProps<TData extends RowData>
  extends Optional<TableProps<TData>, 'columnDef' | 'dataJSON'>,
    ListBoxHeaderProps {
  contentClassName?: string
}

export type ListBoxHeaderProps = {
  /**
   * By default is `list`
   */
  iconName?: iconNameType
  title: ParseKeys<'form'>
  onPrint?: () => void
  onDownload?: () => void
}
