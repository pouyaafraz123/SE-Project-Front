import { rest, RequestHandler } from 'msw'
import { mockUtils, randomIntFromInterval } from '@utils'
import { IFinancialRuleTableEndpoint } from '.'
import { IStats, Status } from '@/interfaces'
const { baseURL, withPage, withRes, withStats } = mockUtils

export const financialRulesMockData: IFinancialRuleTableEndpoint[] = [
  ...Array(50).keys()
].map((index) => {
  return {
    id: String(index + 1),
    facility_id: '215',
    facility_name: 'بیمارستان الغدیر',
    user_id: String(Math.floor(Math.random() * 20) + 1),
    doctor_id: 'no-role-000000028',
    doctor_first_name: 'حامد',
    doctor_last_name: 'اصغریان',
    doctor_speciality: { key: '1', value: 'قلب' }
  }
})

const stats: IStats[] = []

export const handlers: RequestHandler[] = [
  rest.get(baseURL + '/financial-rules', async (req, res, ctx) => {
    const per_page = Number(req.url.searchParams.get('per_page'))
    const page = Number(req.url.searchParams.get('page'))
    return res(
      ctx.status(200),
      ctx.delay(1000),
      ctx.json(
        withRes(
          withStats(withPage(financialRulesMockData, page, per_page), stats)
        )
      )
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
