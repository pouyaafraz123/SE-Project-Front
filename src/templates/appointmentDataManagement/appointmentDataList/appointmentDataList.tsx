import { useTranslation } from 'react-i18next'
import { PageTable } from '@components/organisms/pageTable'
import { AppointmentCard } from '@components/organisms/appointmentCard'
import {
  IAppointmentDataTableEndpoint,
  IAppointmentDataType
} from '@api/appointmentData'
import { ITable } from '@/interfaces'

export function AppointmentDataList(
  props: ITable<IAppointmentDataTableEndpoint>
) {
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
          variant={
            (tableParamProps?.tabProps?.selectedKey as IAppointmentDataType) ||
            'followup'
          }
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
              id: item?.appointment?.appt_id,
              name: item?.appointment?.facility?.value,
              details: { date: item?.appointment?.date }
              // TODO MUST HUMANIZE DATE
            }
          }}
          actions={{
            canDownload: true,
            canPrint: true
          }}
        />
      ))}
    </PageTable>
  )
}
