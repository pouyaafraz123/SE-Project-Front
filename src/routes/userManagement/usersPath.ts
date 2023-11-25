import { generatePath } from '@routes/generatePath'
import { ExtractParams } from '../types'

const changePasswordRoute = '/userManagement/users/changePassword/:id'

const localAdminViewRoute = '/userManagement/local-admin/view/:id'
const localAdminEditRoute = '/userManagement/local-admin/edit/:id'
const localAdminCreateRoute = '/userManagement/local-admin/create'

const doctorViewRoute = '/userManagement/doctor/view/:id'
export type doctorViewParams = ExtractParams<typeof doctorViewRoute>
const doctorEditRoute = '/userManagement/doctor/edit/:id'
export type doctorEditParams = ExtractParams<typeof doctorEditRoute>
const doctorCreateRoute = '/userManagement/doctor/create'
export type doctorCreateParams = ExtractParams<typeof doctorCreateRoute>

const staffViewRoute = '/userManagement/staff/view/:id'
const staffEditRoute = '/userManagement/staff/view/:id'
const staffCreateRoute = '/userManagement/staff/create'

const patientViewRoute = '/userManagement/patient/view/:id'
const patientEditRoute = '/userManagement/patient/edit/:id'
const patientCreateRoute = '/userManagement/patient/create'

export const path = {
  users: {
    route: '/userManagement/users',
    link: () => path.users.route
  },
  changePassword: {
    route: changePasswordRoute,
    link: (id: string) => generatePath(changePasswordRoute, { id })
  },
  localAdmin: {
    route: '/userManagement/local-admin',
    link: () => path.localAdmin.route
  },
  localAdminView: {
    route: localAdminViewRoute,
    link: (id: string) => generatePath(localAdminViewRoute, { id })
  },
  localAdminEdit: {
    route: localAdminEditRoute,
    link: (id: string) => generatePath(localAdminEditRoute, { id })
  },
  localAdminCreate: {
    route: localAdminCreateRoute,
    link: () => generatePath(localAdminCreateRoute)
  },
  doctor: {
    route: '/userManagement/doctor',
    link: () => path.doctor.route
  },
  doctorView: {
    route: doctorViewRoute,
    link: (id: string) => generatePath(doctorViewRoute, { id })
  },
  doctorEdit: {
    route: doctorEditRoute,
    link: (id: string) => generatePath(doctorEditRoute, { id })
  },
  doctorCreate: {
    route: doctorCreateRoute,
    link: () => generatePath(doctorCreateRoute)
  },
  staff: {
    route: '/userManagement/staff',
    link: () => path.staff.route
  },
  staffView: {
    route: staffViewRoute,
    link: (id: string) => generatePath(staffViewRoute, { id })
  },
  staffEdit: {
    route: staffEditRoute,
    link: (id: string) => generatePath(staffEditRoute, { id })
  },
  staffCreate: {
    route: staffCreateRoute,
    link: () => generatePath(staffCreateRoute)
  },
  patient: {
    route: '/userManagement/patient',
    link: () => path.patient.route
  },
  patientView: {
    route: patientViewRoute,
    link: (id: string) => generatePath(patientViewRoute, { id })
  },
  patientEdit: {
    route: patientEditRoute,
    link: (id: string) => generatePath(patientEditRoute, { id })
  },
  patientCreate: {
    route: patientCreateRoute,
    link: () => generatePath(patientCreateRoute)
  }
}
