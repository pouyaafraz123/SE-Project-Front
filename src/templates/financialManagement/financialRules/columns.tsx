import { createColumnHelper } from '@tanstack/react-table'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Chip } from '@/components/atoms/chip'
import { IFinancialRuleTableEndpoint } from '@/api/financial'
import { path } from '@/routes'
import { ActionButton, ViewProfile } from '@/components/tableColumns'

const columnHelper = createColumnHelper<IFinancialRuleTableEndpoint>()

export const useTableColumns = () => {
  const { t } = useTranslation('form')

  return [
    columnHelper.accessor('facility_id', {
      header: t('financial.id')
    }),
    columnHelper.accessor('facility_name', {
      header: t('financial.name')
    }),
    columnHelper.accessor('doctor_id', {
      header: t('financial.doctorId')
    }),
    columnHelper.accessor(
      (data) => `${data.doctor_first_name} ${data.doctor_last_name}`,
      {
        header: t('financial.doctorName')
      }
    ),
    columnHelper.accessor('doctor_speciality', {
      header: t('financial.doctorSpeciality'),
      cell: (props) => (
        <Chip value={props.getValue().value} name={props.getValue().key} />
      )
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
    columnHelper.accessor('user_id', {
      id: 'viewProfile',
      header: t('viewProfile'),
      cell: (props) => (
        <ViewProfile path={path.financial.view.link(props.getValue())} />
      )
    }),
    columnHelper.accessor('id', {
      id: 'action',
      header: t('action'),
      cell: (props) => <ActionButton />
    })
  ]
}
