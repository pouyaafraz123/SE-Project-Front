import clsx from 'clsx'
import { InformationItem } from '@components/molecules/informationItem'
import { IAppointmentCardTopProps } from '@components/organisms/appointmentCard'
import classes from './styles.module.scss'

/**
 * AppointmentCardTop component displays the top section of an appointment card.
 *
 * @param {IAppointmentCardTopProps} props - The props for the AppointmentCardTop component.
 * @param {TAppointmentInformation} props.appointmentInfo - Information about the appointment.
 * @param {TPatientInformation} props.patientInfo - Information about the patient.
 * @param {TDoctorInformation} props.doctorInfo - Information about the doctor.
 * @returns AppointmentCardTop The rendered AppointmentCardTop component.
 */
export function AppointmentCardTop({
  appointmentInfo,
  patientInfo,
  doctorInfo
}: IAppointmentCardTopProps) {
  return (
    <div className={clsx(classes.top)}>
      {/* Display information about the doctor */}
      <InformationItem {...doctorInfo} variant={'doctor'} />
      {/* Display information about the patient */}
      <InformationItem {...patientInfo} variant={'patient'} />
      {/* Display information about the appointment */}
      <InformationItem {...appointmentInfo} variant={'appointment'} />
    </div>
  )
}
