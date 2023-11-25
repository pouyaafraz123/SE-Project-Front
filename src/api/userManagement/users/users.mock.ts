import { rest, RequestHandler } from 'msw'
import { mockUtils, randomIntFromInterval } from '@utils'
import { IUsersListEndpoint } from '.'
import { IOption, IStats, Status } from '@/interfaces'
const { baseURL, withPage, withRes, withStats } = mockUtils

export const usersTableMockData: IUsersListEndpoint[] = [
  ...Array(50).keys()
].map((index) => {
  const statusList: IOption<Status>[] = [
    { key: 'active', value: 'فعال' },
    { key: 'denied', value: 'غیر فعال' },
    { key: 'pending', value: 'در انتظار تایید' }
  ]
  const randomNumber = randomIntFromInterval(0, 2)
  return {
    id: String(index + 1),
    user_id: index + '',
    city: { key: '1', value: 'تبریز' },
    state: { key: '1', value: 'آذربایجان شرقی' },
    first_name: 'حامد',
    last_name: 'اصغریان',
    gender: {
      key: 'male',
      value: 'مرد'
    },
    all_roles: [
      { key: 'super-admin', value: 'سوپر ادمین' },
      { key: 'staff', value: 'کارکن' },
      { key: 'local-admin', value: 'ادمین محلی' }
    ],
    status: statusList[randomNumber]
  }
})

const stats: IStats[] = [
  { key: 'user-all', name: 'همه کاربران', value: usersTableMockData.length },
  {
    key: 'user-active',
    name: 'کاربران فعال',
    value: usersTableMockData.filter((x) => x.status.key == 'active').length
  },
  {
    key: 'user-denied',
    name: 'کاربران غیرفعال',
    value: usersTableMockData.filter((x) => x.status.key == 'denied').length
  },
  {
    key: 'user-pending',
    name: 'کاربران در انتظار تایید',
    value: usersTableMockData.filter((x) => x.status.key == 'pending').length
  }
]

export const handlers: RequestHandler[] = [
  rest.get(baseURL + '/users', async (req, res, ctx) => {
    const per_page = Number(req.url.searchParams.get('per_page'))
    const page = Number(req.url.searchParams.get('page'))
    return res(
      ctx.status(200),
      ctx.delay(1000),
      ctx.json(
        withRes(withStats(withPage(usersTableMockData, page, per_page), stats))
      )
    )
  }),
  rest.put(baseURL + '/users/change-status', async (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.delay(1000),
      ctx.json({ data: '', message: 'موفقیت آمیز' })
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
