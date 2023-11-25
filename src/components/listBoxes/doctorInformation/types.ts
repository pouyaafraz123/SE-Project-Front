export type DoctorInformationDataType = {
  id: number
  doctorId: string
  avatar: string
  firstName: string
  lastName: string
  gender: string
  city: string
  education: string
  speciality: string
}
// export type ColumnActionProps = {

// }

export type DoctorInformationProps = {
  data: DoctorInformationDataType
}
