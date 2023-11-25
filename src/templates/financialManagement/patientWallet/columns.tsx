import { createColumnHelper } from '@tanstack/react-table'
import { useTranslation } from 'react-i18next'
import { useConvertDate } from '@utils'
import { ColumnActionProps } from './types'
import { Chip } from '@/components/atoms/chip'
import { IPaientWalletTableEndpoint } from '@/api/financial/wallet'
import { ActionButton } from '@/components/tableColumns'

const columnHelper = createColumnHelper<IPaientWalletTableEndpoint>()

export const useTableColumns = (props: ColumnActionProps) => {
  const { updateBalanceMutationFn } = props
  const { t } = useTranslation('form')
  const { convertBirthday } = useConvertDate()

  return [
    columnHelper.accessor('user.id', {
      header: t('userId')
    }),
    columnHelper.accessor(
      (data) => `${data.user.first_name} ${data.user.last_name}`,
      {
        header: t('patientName')
      }
    ),
    columnHelper.accessor((data) => data.user.birthday, {
      header: t('birthday'),
      cell: (props) => <div>{convertBirthday(props.getValue())}</div>
    }),
    columnHelper.accessor('user.gender', {
      header: t('gender'),
      cell: (props) => (
        <Chip value={props.getValue().value} name={props.getValue().key} />
      )
    }),
    columnHelper.accessor('user.national_id', {
      header: t('nationalCode')
    }),
    columnHelper.accessor('balance', {
      header: t('balance')
    }),
    // columnHelper.accessor('user_id', {
    //   id: 'view',
    //   header: t('view'),
    //   cell: (props) => (
    //     <Link to={path.financial.view.link(props.getValue())}>
    //       {t('viewProfile')}
    //     </Link>
    //   )
    // }),
    columnHelper.accessor('user.id', {
      id: 'action',
      header: t('action'),
      cell: (props) => (
        <ActionButton
          updateBalanceProps={{
            id: props.getValue(),
            mutateFn: updateBalanceMutationFn
          }}
        />
      )
    })
  ]
}
