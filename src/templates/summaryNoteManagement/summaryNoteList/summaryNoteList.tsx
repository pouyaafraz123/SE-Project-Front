import { ISummaryNoteTableEndpoint } from '@api/summaryNote'
import { useTranslation } from 'react-i18next'
import { AppointmentCard } from '@components/organisms/appointmentCard'
import { PageTable } from '@components/organisms/pageTable'
import { ITable } from '@/interfaces'

export function SummaryNoteList(props: ITable<ISummaryNoteTableEndpoint>) {
  const { t } = useTranslation('common')
  const { data, isLoading, isFetching, tableParamProps, total } = props

  if (isLoading || !data) return null

  // TODO MUST ADD LINKS
  return (
    <PageTable
      type={'row'}
      title={t('summary_note_table_title')}
      total={total}
      isFetching={isFetching}
      {...tableParamProps}
    >
      {data?.map((item) => (
        <AppointmentCard
          variant={'past-appointment'}
          key={item?.id}
          id={item?.id}
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
          actions={{ canPrint: true, canDownload: true }}
        />
      ))}
    </PageTable>
  )
}
