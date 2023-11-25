import { FormikProps } from 'formik'

export type IIllness = {
  id: string | number
  name: string
}

export interface IIllnessListBoxFormikSchema {
  illnessList: IIllness[]
  illnessName: string
}

export interface IIllnessListProps<T extends IIllnessListBoxFormikSchema> {
  formik: FormikProps<T>
}

export interface IIllnessListBoxProps extends IIllnessColumnActionProps {
  illnessList: IIllness[]
}

export interface IIllnessAddFormProps<T extends IIllnessListBoxFormikSchema> {
  formik: FormikProps<T>
  onAdd: () => void
}

export type IIllnessColumnActionProps = {
  onDelete?: (id: string | number) => void
}
