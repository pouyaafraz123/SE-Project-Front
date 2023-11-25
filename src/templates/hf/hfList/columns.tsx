import { ColumnDef, createColumnHelper } from '@tanstack/react-table'
import { IHealthFacilityTable } from '@api/hf'
import { Link } from '@components/atoms/link'
import { useTranslation } from 'react-i18next'
import { Chip } from '@/components/atoms/chip'
import { ActionButton } from '@/components/tableColumns'
import { path } from '@/routes'

const columnHelper = createColumnHelper<IHealthFacilityTable>()

export const useTableColumns = () => {
  const { t } = useTranslation('form')

  return [
    // columnHelper.display({
    //   header: 'ردیف',
    //   id: 'row',
    //   cell: ({ row }) => <span>{row.index + 1}</span>
    // }),
    columnHelper.accessor('id', {
      header: t('id')
    }),
    columnHelper.accessor('name', {
      header: t('hfName')
    }),
    columnHelper.accessor((data) => data.parent_name || '---', {
      header: t('parentHFName')
    }),
    columnHelper.accessor((data) => `${data.state.value}/${data.city.value}`, {
      header: t('state/city')
    }),
    columnHelper.accessor('type', {
      header: t('hfType'),
      cell: (props) => (
        <Chip value={props.getValue().value} name={props.getValue().key} />
      )
    }),
    columnHelper.accessor('address', {
      header: t('address')
    }),
    columnHelper.accessor('id', {
      id: 'view',
      header: t('view'),
      cell: (props) => (
        <Link to={path.hf.hfView.link(props.getValue())}>نمایش</Link>
      )
    }),
    columnHelper.accessor(
      (data) => {
        return { hasAction: !data.parent_name, id: data.id }
      },
      {
        id: 'action',
        header: t('action'),
        cell: (props) =>
          props.getValue().hasAction ? (
            <ActionButton
              addBranchProps={{
                path: path.hf.hfCreate.link(props.getValue().id)
              }}
            />
          ) : null
      }
    )
  ]
}
