import { createColumnHelper } from '@tanstack/react-table'
import { IHealthFacilityTable } from '@api/hf'
import { Link } from '@components/atoms/link'
import { path } from '@routes/hf/path'
import { useTranslation } from 'react-i18next'
import { ActionBtn } from '@components/molecules/actionButton'
import { Chip } from '@/components/atoms/chip'

const columnHelper = createColumnHelper<IHealthFacilityTable>()

export const useTableColumns = () => {
  const { t } = useTranslation('form')

  return [
    //     header: 'ردیف',
    //     id: 'row',
    //     cell: ({ row }) => <span>{row.index + 1}</span>
    //   }),
    columnHelper.accessor('id', {
      header: t('id')
    }),
    columnHelper.accessor('name', {
      header: t('hfName')
    }),
    columnHelper.accessor((data) => data.parent_name || '---', {
      header: t('parentHFName')
    }),
    columnHelper.accessor((data) => `${data.state}/${data.city}`, {
      header: t('state/city')
    }),
    columnHelper.accessor('type', {
      header: t('hfType'),
      cell: (props) => <Chip value={props.getValue()} name={props.getValue()} />
    }),
    columnHelper.accessor('address', {
      header: t('address')
    }),
    columnHelper.accessor('id', {
      header: t('view'),
      cell: (props) => (
        <Link to={path.hfView.link(props.getValue())}>نمایش</Link>
      )
    }),
    columnHelper.display({
      header: t('action'),
      cell: (props) => <ActionBtn />
    })
  ]
}
