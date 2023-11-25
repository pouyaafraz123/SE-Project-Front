import { FormikProps } from 'formik'
import { IOption } from '@/interfaces'
import { IHFSearchEndpoint } from '@/api/infinite'

export type IHF = IHFSearchEndpoint

export interface hfListBoxFormikSchema {
  hfCountry: IOption
  hfState: IOption
  hfCity: IOption
  hfType: IOption
  hf: IOption
  hfList: IHF[]
}

export interface HFListBoxProps<T extends hfListBoxFormikSchema> {
  formik: FormikProps<T>
}

export interface HFAddFormProps<T extends hfListBoxFormikSchema> {
  formik: FormikProps<T>
  onAdd: (data: IHF) => void
}

export type ColumnActionProps = {
  onDelete: (id: string) => void
}
