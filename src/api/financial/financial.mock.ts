import { rest, RequestHandler } from 'msw'
import { mockUtils, randomIntFromInterval } from '@utils'
import { IFinancialRulesListPerDoctorEndpoint } from '.'
import { IStats, Status } from '@/interfaces'
const { baseURL, withPage, withRes, withStats } = mockUtils

export const financialRulesMockData: IFinancialRulesListPerDoctorEndpoint = {
  doctor: {
    user_id: '1',
    country: { key: '1', value: 'ایران' },
    state: { key: '1', value: 'آذربایجان شرقی' },
    city: { key: '1', value: 'تبریز' },
    speciality: { key: '1', value: 'اعصاب و روان' },
    doctor: { key: '1', value: 'سید امیرحسین باحجب جعفریان اصل تبریزی' }
  },
  list: [...Array(20).keys()].map((i) => {
    return {
      id: String(i + 1),
      visit_type: { key: 'emergency', value: 'اورژانسی' },
      cost: '15',
      overflow_percent: '5',
      time: '90'
    }
  })
}

const stats: IStats[] = []

export const handlers: RequestHandler[] = [
  rest.get(baseURL + '/financial-rules/1', async (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.delay(1000),
      ctx.json(withRes(financialRulesMockData))
    )
  })
  //   rest.get(baseURL + '/facilities/:id', async (req, res, ctx) => {
  //     const { id } = req.params
  //     return res(
  //       ctx.status(200),
  //       ctx.delay(1000),
  //       ctx.json(withRes(hfList.filter((value) => value.id === Number(id))[0]))
  //     )
  //   })
]
