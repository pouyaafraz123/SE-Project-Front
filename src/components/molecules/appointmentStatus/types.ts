import { TStatusColor } from '@components/atoms/statusChipBase'

/** Type representing possible appointment status values. */
export type TAppointmentStatus =
  | 'pending'
  | 'checked-in'
  | 'completed'
  | 'canceled'

/** Props for an appointment status component. */
export interface IAppointmentStatusProps {
  /** The status of the appointment. */
  status: TAppointmentStatus
}

/** Type representing data for different appointment status values. */
export type TAppointmentStatusData = {
  /** The type of appointment status. */
  type: TAppointmentStatus
  /** The color of the status chip associated with this status. */
  color: TStatusColor
  /** The label text for the status. */
  label: string
}[]

/** Data array for appointment status options. */
export const appointmentStatusData: TAppointmentStatusData = [
  { type: 'pending', color: 'warning', label: 'در انتظار ...' },
  { type: 'checked-in', color: 'primary', label: 'وارد شده' },
  { type: 'canceled', color: 'danger', label: 'لغو شده' },
  { type: 'completed', color: 'success', label: 'تکمیل شده' }
]
