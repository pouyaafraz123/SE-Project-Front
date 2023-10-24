/**
 * Type representing the combined properties of an InformationItem, including details and variant.
 */
export type TInformationItemProps = IInformationItemData &
  TInformationCardVariants

/**
 * Interface representing information about an entity.
 */
export interface IInformation {
  avatarUrl?: string
  link?: string
  id: string
  name: string
  lastName?: string
  details: { [key: string]: string }
}

/**
 * Interface representing additional data for an InformationItem.
 */
export interface IInformationItemData extends IInformation {
  noAvatar?: boolean
  title?: string
}

/**
 * Type representing details specific to a doctor.
 */
export type TDoctorInformationDetail = { degree?: string; speciality?: string }
/**
 * Type representing details specific to a patient.
 */
export type TPatientInformationDetail = { gender?: string; age?: string }
/**
 * Type representing details specific to an appointment.
 */
export type TAppointmentInformationDetail = { date?: string }

/**
 * Type representing the variant and its details for an InformationItem.
 */
export type TInformationCardVariants =
  | {
      variant: 'doctor'
      details: TDoctorInformationDetail
    }
  | {
      variant: 'patient'
      details: TPatientInformationDetail
    }
  | {
      variant: 'appointment'
      details: TAppointmentInformationDetail
    }

/**
 * Type representing the variant of an InformationItem.
 */
export type TInformationItemVariantsType = TInformationCardVariants['variant']

/**
 * Type representing the variants and their partial data for InformationItems.
 */
export type TInformationItemVariants = Record<
  TInformationItemVariantsType,
  Partial<IInformationItemData>
>

/**
 * Type representing details with a specified type.
 */
type DetailType<T> = { details: T }

/**
 * Type representing a doctor's information.
 */
export type TDoctorInformation = IInformation &
  DetailType<TDoctorInformationDetail>
/**
 * Type representing a patient's information.
 */
export type TPatientInformation = IInformation &
  DetailType<TPatientInformationDetail>
/**
 * Type representing an appointment's information.
 */
export type TAppointmentInformation = Omit<
  IInformation,
  'lastName' | 'avatarUrl' | 'link'
> &
  DetailType<TAppointmentInformationDetail>
