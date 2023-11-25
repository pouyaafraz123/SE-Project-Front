import { IconButton } from '@components/molecules/iconButton'
import clsx from 'clsx'
import { Icon } from '@components/atoms/icons'
import { IAppointmentCardActionProps } from '@components/organisms/appointmentCard/components/appointmentCardActions/types.ts'
import { useTranslation } from 'react-i18next'
import { IAppointmentCardVariants } from '@components/organisms/appointmentCard'
import classes from './styles.module.scss'

/**
 * AppointmentCardActions component displays actions for an appointment card.
 *
 * @returns AppointmentCardActions The rendered AppointmentCardActions component.
 */
export function AppointmentCardActions({
  variant,
  canPrint,
  canDownload,
  canEdit,
  canReschedule,
  canView
}: IAppointmentCardActionProps) {
  const { t } = useTranslation('common')

  const appointmentData: IAppointmentCardVariants[] = [
    'followup',
    'order',
    'referral',
    'prescription'
  ]

  const isAppointmentData = appointmentData?.includes(variant)

  return (
    <div className={clsx(classes.actions)}>
      {variant === 'appointment' && (
        <>
          {canReschedule && (
            <IconButton
              icon={<Icon name={'eye'} />}
              label={t('reschedule')}
              transparent
            />
          )}
          {canEdit && (
            <IconButton
              icon={<Icon name={'pen-square'} />}
              label={t('edit')}
              transparent
            />
          )}
          {canView && (
            <IconButton
              icon={<Icon name={'calendar'} />}
              label={t('view')}
              transparent
            />
          )}
        </>
      )}
      {isAppointmentData && (
        <>
          {canPrint && (
            <IconButton
              icon={<Icon name={'printer-minimalistic'} />}
              label={t('print')}
              transparent
            />
          )}
          {canDownload && (
            <IconButton
              icon={<Icon name={'download-square'} />}
              label={t('download')}
              transparent
            />
          )}
        </>
      )}
      {variant === 'past-appointment' && (
        <>
          {canPrint && (
            <IconButton
              icon={<Icon name={'printer-minimalistic'} />}
              label={t('print')}
              transparent
            />
          )}
          {canDownload && (
            <IconButton
              icon={<Icon name={'download-square'} />}
              label={t('download')}
              transparent
            />
          )}
        </>
      )}
      {variant === 'summary-note' && (
        <>
          {canPrint && (
            <IconButton
              icon={<Icon name={'printer-minimalistic'} />}
              label={t('print')}
              transparent
            />
          )}
          {canDownload && (
            <IconButton
              icon={<Icon name={'download-square'} />}
              label={t('download')}
              transparent
            />
          )}
          {canView && (
            <IconButton
              icon={<Icon name={'calendar'} />}
              label={t('view')}
              transparent
            />
          )}
        </>
      )}
    </div>
  )
}
