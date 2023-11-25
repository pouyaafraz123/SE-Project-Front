import { IAppointmentTableEndpoint } from '@api/appointment'
import { PageTable } from '@components/organisms/pageTable'
import { useTranslation } from 'react-i18next'
import { AppointmentCard } from '@components/organisms/appointmentCard'
import { ITable } from '@/interfaces'

export function AppointmentTable(props: ITable<IAppointmentTableEndpoint>) {
  const { t } = useTranslation('common')
  const { data, isLoading, isFetching, tableParamProps, total } = props

  if (isLoading || !data) return null

  // TODO MUST ADD LINKS
  return (
    <PageTable
      type={'row'}
      title={t('appointmentTableTitle')}
      total={total}
      isFetching={isFetching}
      {...tableParamProps}
    >
      {data?.map((item) => (
        <AppointmentCard
          variant={'appointment'}
          id={item?.id}
          key={item?.id}
          status={item?.status}
          data={{
            doctorInfo: {
              id: item?.doctor?.user_id,
              name: item?.doctor?.first_name,
              lastName: item?.doctor?.last_name,
              avatarUrl: item?.doctor?.avatar,
              details: {
                degree: item?.doctor?.degree?.value,
                speciality: item?.doctor?.speciality?.value
              }
            },
            patientInfo: {
              id: item?.patient?.user_id,
              name: item?.patient?.first_name,
              lastName: item?.patient?.last_name,
              avatarUrl: item?.patient?.avatar,
              details: {
                age: item?.patient?.age,
                gender: item?.patient?.gender?.value
              }
            },
            appointmentInfo: {
              id: item?.appt_id,
              name: item?.facility?.value,
              details: { date: item?.date }
              // TODO MUST HUMANIZE DATE
            }
          }}
          canCancel={item?.can_cancel}
          canJoin={item?.can_join}
          actions={{
            canView: item?.can_view,
            canReschedule: item?.can_reschedule,
            canEdit: item?.can_edit
          }}
        />
      ))}
    </PageTable>
  )
}
