import { FormikProps } from 'formik'
import { IOption } from '@/interfaces'

export type IFinancialRule = {
  id: string
  visitType: IOption
  visitDuration: string
  price: string
  robovPercentage: string
}

export interface ruleListBoxFormikSchema {
  visitType: IOption
  visitDuration: string
  price: string
  robovPercentage: string
  ruleList: IFinancialRule[]
}

export interface RuleListBoxProps<T extends ruleListBoxFormikSchema> {
  formik: FormikProps<T>
}

export interface RuleAddFormProps<T extends ruleListBoxFormikSchema> {
  formik: FormikProps<T>
  onAdd: () => void
}

export type ColumnActionProps = {
  onDelete: (id: string) => void
}
