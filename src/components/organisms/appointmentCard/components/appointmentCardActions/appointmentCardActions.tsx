import { IconButton } from '@components/molecules/iconButton'
import { FigmaLinear } from '@components/icons'
import clsx from 'clsx'
import classes from './styles.module.scss'

/**
 * AppointmentCardActions component displays actions for an appointment card.
 *
 * @returns AppointmentCardActions  The rendered AppointmentCardActions component.
 */
export function AppointmentCardActions() {
  // TODO: FIX ICONS AND TEXTS

  return (
    <div className={clsx(classes.actions)}>
      <IconButton icon={<FigmaLinear />} label={'Reschedule'} transparent />
      <IconButton icon={<FigmaLinear />} label={'Edit'} transparent />
      <IconButton icon={<FigmaLinear />} label={'View'} transparent />
    </div>
  )
}
