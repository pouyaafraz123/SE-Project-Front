import { IFinancialRulesListPerDoctor } from '@api/financial'

export type IDoctorFinancialRule = IFinancialRulesListPerDoctor

export type IProps = {
  list: IDoctorFinancialRule[]
  onDelete: (id: string) => void
  onEdit: (id: string) => void
}

export type ColumnActionProps = {
  onDelete: (id: string) => void
  onEdit: (id: string) => void
}
