import { FormikProps } from 'formik'
import { IOption } from '@/interfaces'

type operationTimeType = {
  day: IOption
  startTime: string
  endTime: string
}

export type IOperationTimesLists = {
  id: string
} & operationTimeType

export interface IOperationTimesFormikSchema extends operationTimeType {
  operationTimesLists: IOperationTimesLists[]
}

export interface OperationTimesProps<T extends IOperationTimesFormikSchema> {
  formik: FormikProps<T>
}

export type ColumnActionProps = {
  onDelete: (id: string) => void
}
