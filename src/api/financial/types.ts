import { IOption } from '@/interfaces'

export type IFinancialRuleTableEndpoint = {
  id: string
  facility_id: string
  facility_name: string
  user_id: string
  doctor_id: string // for show only
  doctor_first_name: string
  doctor_last_name: string
  doctor_speciality: IOption
}

export type IFinancialRulesListPerDoctorEndpoint = {
  list: IFinancialRulesListPerDoctor[]
  doctor: IFinancialDoctor
}

export type IFinancialRulesListPerDoctor = {
  id: string
  visit_type: IOption
  time: string
  cost: string
  overflow_percent: string
}

export type IFinancialDoctor = {
  user_id: string
  country: IOption
  state: IOption
  city: IOption
  speciality: IOption
  doctor: IOption
}

export type IFinancialRule = {
  id: string
  visit_type: IOption
  time: string
  cost: string
  overflow_percent: string
}

export type IFinancialRuleDTO = {
  id: string
  visit_type: string
  time: string
  cost: string
  overflow_percent: string
}

export type FinancialRuleCreateDTO = {
  doctor_ids: string[]
  items: {
    visit_type: string
    time: string
    cost: string
    overflow_percent: string
  }[]
}
