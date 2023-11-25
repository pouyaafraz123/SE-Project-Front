import { rest, RequestHandler } from 'msw'
import { mockUtils } from '@utils'
import { IProfileEndpoint } from './types'
const { baseURL, withPage, withRes } = mockUtils

export const profile = {
  id: 1,
  user_id: null,
  first_name: 'ناصر',
  last_name: 'محمدی',
  email: 'superadmin@husan.ir',
  mobile: '+98-9364497667',
  avatar: `https://api.dicebear.com/7.x/pixel-art/svg?seed=${Math.random()}`,
  status: {
    key: 'active',
    value: 'فعال'
  },
  is_active: true,
  birthday: '2003-09-27T00:00:00.000000Z',
  gender: {
    key: 'male',
    value: 'مرد'
  },
  phone: '+98-9364497667',
  emergency_phone_number: '+98-9364497667',
  insurance: null,
  employee_number: null,
  mrn_number: null,
  national_id: '1362223018',
  need_to_change_password: 0,
  address: {
    id: 2,
    name: null,
    phone: '+1-757-932-0704',
    fax: '347-761-4644',
    address: '702 Reynolds Skyway Suite 176\nWest Mya, AK 92873',
    postal_code: '60592-4651',
    gmtOffset: null,
    city: {
      id: 126788,
      name: 'Abbeville'
    },
    state: {
      id: 4731,
      name: 'Alabama'
    },
    country: {
      id: 231,
      name: 'United States',
      flag: 'https://cdn.kcak11.com/CountryFlags/countries/us.svg'
    },
    email: 'areichel@yahoo.com'
  },
  more_info: null,
  facilities: [
    {
      id: 1,
      facility_id: null,
      name: 'بیمارستان الغدیر',
      type: 'hospital',
      city: {
        id: 148030,
        name: 'West Katlyn'
      },
      state: {
        id: 4965,
        name: 'Lake Annie'
      },
      country: {
        id: 244,
        name: 'Belize',
        flag: 'ov7M1K4XsM'
      },
      roles: [
        {
          id: 6,
          name: 'super-admin',
          slug: 'Super Admin'
        }
      ]
    }
  ],
  departments: [],
  roles: [
    {
      id: 6,
      name: 'super-admin',
      slug: 'Super Admin',
      created_at: '2023-09-27T12:26:59.000000Z',
      updated_at: '2023-09-27T12:26:59.000000Z'
    }
  ],
  current_facility: '1',
  wallet: null
}

export const handlers: RequestHandler[] = [
  rest.get(baseURL + '/profile', async (req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(1000), ctx.json(withRes(profile)))
  })
]
