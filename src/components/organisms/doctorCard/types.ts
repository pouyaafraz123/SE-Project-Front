export interface DoctorCardProps {
  doctorInfo: DoctorInfo
}

export type DoctorInfo = {
  avatar: string
  suggestionPercent: string
  suggestionUsers: string
  firstName: string
  lastName: string
  expertise: string
  button: string
}
