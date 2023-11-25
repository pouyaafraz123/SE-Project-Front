export type PatientInformationDataType = {
  id: number
  patientId: string
  avatar: string
  firstName: string
  lastName: string
  gender: string
  age: number
}
export type ColumnActionProps = {
  /**
   * نمایش آزمایشات انجام شده
   */
  showExperiments?: boolean
}

export type PatientInformationProps = {
  data: PatientInformationDataType
} & ColumnActionProps
