import { FormikProps } from 'formik'

export type IHospitalization = {
  id: string | number
  reason: string
  date: Date
}

export interface IHospitalizationListBoxFormikSchema {
  hospitalizationList: IHospitalization[]
  reason: string
  date: string
  hospitalized: boolean
}

export interface IHospitalizationListProps<
  T extends IHospitalizationListBoxFormikSchema
> {
  formik: FormikProps<T>
}

export interface IHospitalizationListBoxProps
  extends IHospitalizationColumnActionProps {
  hospitalizationList: IHospitalization[]
}

export interface IHospitalizationAddFormProps<
  T extends IHospitalizationListBoxFormikSchema
> {
  formik: FormikProps<T>
  onAdd: () => void
}

export type IHospitalizationColumnActionProps = {
  onDelete?: (id: string | number) => void
}
