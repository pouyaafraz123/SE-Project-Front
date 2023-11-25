import {
  FinancialRuleCreateDTO,
  IFinancialRuleDTO,
  IFinancialRulesListPerDoctorEndpoint,
  IFinancialDoctor
} from '@api/financial'
import { IUserSearchEndpoint } from '@/api/infinite'
import { IFinancialRule } from '@/components/listBoxes/financialRule'
import { doctorListBoxFormikSchema } from '@/components/listBoxes/doctor/types'

export const mapCreate = {
  toAPI: (
    doctorList: { id: string }[],
    ruleList: IFinancialRule[]
  ): FinancialRuleCreateDTO => {
    return {
      doctor_ids: doctorList.map((item) => item.id),
      items: ruleList.map((item) => {
        return {
          cost: item.price,
          overflow_percent: item.robovPercentage,
          time: item.visitDuration,
          visit_type: item.visitType.key
        }
      })
    }
  }
}

export const mapEdit = {
  toAPI: (rule: IFinancialRule): IFinancialRuleDTO => {
    return {
      id: rule.id,
      cost: rule.price,
      overflow_percent: rule.robovPercentage,
      time: rule.visitDuration,
      visit_type: rule.visitType.key
    }
  }
}

export const mapDoctor = {
  fromAPI: (doctor: IFinancialDoctor): doctorListBoxFormikSchema => {
    return {
      doctor: doctor.doctor,
      doctorCity: doctor.city,
      doctorState: doctor.state,
      doctorCountry: doctor.country,
      doctorSpeciality: doctor.speciality,
      doctorList: []
    }
  }
}
