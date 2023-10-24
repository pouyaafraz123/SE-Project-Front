import {
  TAppointmentInformation,
  TDoctorInformation,
  TPatientInformation
} from '@components/molecules/informationItem'

/**
 * Interface representing the props for the AppointmentCardTop component.
 */
export interface IAppointmentCardTopProps {
  /**
   * Information about the doctor associated with the appointment.
   */
  doctorInfo: TDoctorInformation

  /**
   * Information about the patient associated with the appointment.
   */
  patientInfo: TPatientInformation

  /**
   * Information about the appointment.
   */
  appointmentInfo: TAppointmentInformation
}
