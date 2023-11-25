import { ISummaryCardButtonProps } from '@components/organisms/appointmentCard/components/appointmentCardButtons/types.ts'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import classes from '@components/organisms/appointmentCard/components/appointmentCardButtons/styles.module.scss'
import { Button } from '@components/atoms/button'

export function SummaryCardButtons({
  canWriteAddendum = true,
  canWriteSummary = true
}: ISummaryCardButtonProps) {
  const { t } = useTranslation('common')

  return (
    <div className={clsx(classes.appointmentButtons)}>
      {/* Button to cancel the appointment */}
      {canWriteSummary && (
        <Button mode={'main'} label={t('write_visit_summary_note')} />
      )}
      {/* Button to join a video call */}
      {canWriteAddendum && (
        <Button mode={'secondary'} label={t('write_addendum')} />
      )}
    </div>
  )
}
