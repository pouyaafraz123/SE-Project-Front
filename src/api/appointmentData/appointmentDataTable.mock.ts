import { mockUtils, randomBool } from '@utils'
import { ApptTypes } from '@constants'
import { RequestHandler, rest } from 'msw'
import { IAppointmentDataTableEndpoint } from '@api/appointmentData/types.ts'

const { baseURL, withPage, withRes } = mockUtils

export const appointmentDataListTable: IAppointmentDataTableEndpoint[] = [
  ...Array(500).keys()
].map((i) => {
  return {
    id: i,
    status: randomBool() ? 'performed' : 'un-performed',
    doctor: {
      id: i * 10 + 1,
      user_id: 'D-000000004',
      first_name: 'محمدرضا',
      last_name: 'قنبری متین',
      avatar: `https://api.dicebear.com/7.x/pixel-art/svg?seed=${Math.random()}`,
      speciality: { key: '1', value: 'چشم پزشک' },
      degree: { key: '22', value: 'دکتری' }
    },
    patient: {
      id: i * 10 + 2,
      user_id: 'P-000000006',
      first_name: 'محمدرضا',
      last_name: 'قنبری متین',
      avatar: `https://api.dicebear.com/7.x/pixel-art/svg?seed=${Math.random()}`,
      age: '22',
      gender: { key: 'male', value: 'مذکر' }
    },
    appointment: {
      id: 1121,
      appt_id: 'loc-0000339',
      date: '2023-05-23 01:30:00',
      facility: {
        key: '1212',
        value: 'ساختمان پزشکی ملاصدرا'
      },
      type: ApptTypes.LOCAL
    }
  }
})

export const handlers: RequestHandler[] = [
  rest.get(baseURL + '/appointments-data', async (req, res, ctx) => {
    const per_page = Number(req.url.searchParams.get('per_page'))
    const page = Number(req.url.searchParams.get('page'))
    return res(
      ctx.status(200),
      ctx.delay(1000),
      ctx.json(withRes(withPage(appointmentDataListTable, page, per_page)))
    )
  })
]
