import { IAppointmentTableEndpoint } from '@api/appointment/types.ts'
import { TAppointmentStatus } from '@components/molecules/appointmentStatus'
import { RequestHandler, rest } from 'msw'
import { mockUtils, randomBool } from '@utils'
import { IStats } from '@/interfaces'

const { baseURL, withPage, withRes, withStats } = mockUtils

const statusGenerator = () => {
  const status: TAppointmentStatus[] = [
    'pending',
    'checked-in',
    'completed',
    'canceled'
  ]

  return status[Math.floor(Math.random() * status.length)]
}

export const appointmentListTable: IAppointmentTableEndpoint[] = [
  ...Array(500).keys()
].map((i) => {
  return {
    id: i,
    appt_id: 'loc-0000339',
    date: '2023-05-23 01:30:00',
    status: statusGenerator(),
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
    facility: {
      key: '1212',
      value: 'ساختمان پزشکی ملاصدرا'
    },
    can_reschedule: randomBool(),
    can_edit: randomBool(),
    can_view: randomBool(),
    can_join: randomBool(),
    can_cancel: randomBool(),
    can_noShow: randomBool()
  }
})

const stats: IStats[] = [
  {
    key: 'all-appointments',
    name: 'همه وقت‌های ملاقات',
    value: appointmentListTable.length
  },
  {
    key: 'pending-appointments',
    name: 'وقت‌های ملاقات در انتظار',
    value: appointmentListTable.filter((x) => x.status == 'pending').length
  },
  {
    key: 'checked-in-appointments',
    name: 'وقت‌های ملاقات در حال اجرا',
    value: appointmentListTable.filter((x) => x.status == 'checked-in').length
  },
  {
    key: 'completed-appointments',
    name: 'وقت‌های ملاقات تمام شده',
    value: appointmentListTable.filter((x) => x.status == 'completed').length
  },
  {
    key: 'canceled-appointments',
    name: 'وقت‌های ملاقات لغو شده',
    value: appointmentListTable.filter((x) => x.status == 'canceled').length
  }
]

export const handlers: RequestHandler[] = [
  rest.get(baseURL + '/appointments', async (req, res, ctx) => {
    const per_page = Number(req.url.searchParams.get('per_page'))
    const page = Number(req.url.searchParams.get('page'))
    return res(
      ctx.status(200),
      ctx.delay(1000),
      ctx.json(
        withRes(
          withStats(withPage(appointmentListTable, page, per_page), stats)
        )
      )
    )
  })
]
