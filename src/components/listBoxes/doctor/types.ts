import { FormikProps } from 'formik'
import { IOption } from '@/interfaces'
import { IUserSearchEndpoint } from '@/api/infinite'

export type IDoctor = IUserSearchEndpoint

export interface doctorListBoxFormikSchema {
  doctorCountry: IOption
  doctorState: IOption
  doctorCity: IOption
  doctorSpeciality: IOption
  doctor: IOption
  doctorList: IDoctor[]
}

export interface DoctorListBoxProps<T extends doctorListBoxFormikSchema> {
  formik: FormikProps<T>
}

export interface DoctorAddFormProps<T extends doctorListBoxFormikSchema> {
  formik: FormikProps<T>
  onAdd?: (data: IDoctor) => void
  mode?: 'create' | 'view'
}

export type ColumnActionProps = {
  onDelete: (id: string) => void
}
