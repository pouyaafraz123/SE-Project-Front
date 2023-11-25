import { RouteObject } from 'react-router-dom'
import type { ILoaderData as IPatientLoaderData } from '@pages/superadmin/userManagement/patient/patientForm'
import type { ILoaderData as IDoctorLoaderData } from '@pages/superadmin/userManagement/doctor/doctorForm'
import { path } from './usersPath'
import { useUIStore } from '@/stores'

export const usersRoutes: RouteObject[] = [
  {
    path: path.users.route,
    lazy: () => import('@pages/superadmin/userManagement/users/usersList'),
    loader: () => {
      useUIStore
        .getState()
        .setPage('pageTitle.usersManagement', [
          { name: 'pageTitle.main', link: '/' }
        ])
      return {}
    }
  },
  {
    path: path.localAdmin.route,
    lazy: () =>
      import('@pages/superadmin/userManagement/localAdmin/localAdminList'),
    loader: () => {
      useUIStore
        .getState()
        .setPage('pageTitle.localAdminManagement', [
          { name: 'pageTitle.main', link: '/' }
        ])
      return {}
    }
  },
  {
    path: path.doctor.route,
    lazy: () => import('@pages/superadmin/userManagement/doctor/doctorList'),
    loader: () => {
      useUIStore
        .getState()
        .setPage('pageTitle.doctorManagement', [
          { name: 'pageTitle.main', link: '/' }
        ])
      return {}
    }
  },
  {
    path: path.doctorView.route,
    lazy: () => import('@pages/superadmin/userManagement/doctor/doctorForm'),
    loader: ({ params }): IDoctorLoaderData => {
      useUIStore.getState().setPage('pageTitle.doctorView', [
        { name: 'pageTitle.main', link: '/' },
        { name: 'pageTitle.doctorManagement', link: path.doctor.link() }
      ])
      return { mode: 'view', id: params.id! }
    }
  },
  {
    path: path.doctorEdit.route,
    lazy: () => import('@pages/superadmin/userManagement/doctor/doctorForm'),
    loader: ({ params }): IDoctorLoaderData => {
      useUIStore.getState().setPage('pageTitle.doctorEdit', [
        { name: 'pageTitle.main', link: '/' },
        { name: 'pageTitle.doctorManagement', link: path.doctor.link() }
      ])
      return { mode: 'edit', id: params.id! }
    }
  },
  {
    path: path.doctorCreate.route,
    lazy: () => import('@pages/superadmin/userManagement/doctor/doctorForm'),
    loader: (): IDoctorLoaderData => {
      useUIStore.getState().setPage('pageTitle.doctorCreate', [
        { name: 'pageTitle.main', link: '/' },
        { name: 'pageTitle.doctorManagement', link: path.doctor.link() }
      ])
      return { mode: 'create' }
    }
  },
  {
    path: path.staff.route,
    lazy: () => import('@pages/superadmin/userManagement/staff/staffList'),
    loader: () => {
      useUIStore
        .getState()
        .setPage('pageTitle.staffManagement', [
          { name: 'pageTitle.main', link: '/' }
        ])
      return {}
    }
  },
  {
    path: path.patient.route,
    lazy: () => import('@pages/superadmin/userManagement/patient/patientList'),
    loader: () => {
      useUIStore
        .getState()
        .setPage('pageTitle.patientManagement', [
          { name: 'pageTitle.main', link: '/' }
        ])
      return {}
    }
  },
  {
    path: path.patientView.route,
    lazy: () => import('@pages/superadmin/userManagement/patient/patientForm'),
    loader: ({ params }): IPatientLoaderData => {
      useUIStore.getState().setPage('pageTitle.patientView', [
        { name: 'pageTitle.main', link: '/' },
        { name: 'pageTitle.patientManagement', link: path.patient.link() }
      ])
      return { mode: 'view', id: params.id! }
    }
  },
  {
    path: path.patientEdit.route,
    lazy: () => import('@pages/superadmin/userManagement/patient/patientForm'),
    loader: ({ params }): IPatientLoaderData => {
      useUIStore.getState().setPage('pageTitle.patientEdit', [
        { name: 'pageTitle.main', link: '/' },
        { name: 'pageTitle.patientManagement', link: path.patient.link() }
      ])
      return { mode: 'edit', id: params.id! }
    }
  },
  {
    path: path.patientCreate.route,
    lazy: () => import('@pages/superadmin/userManagement/patient/patientForm'),
    loader: (): IPatientLoaderData => {
      useUIStore.getState().setPage('pageTitle.patientCreate', [
        { name: 'pageTitle.main', link: '/' },
        { name: 'pageTitle.patientManagement', link: path.patient.link() }
      ])
      return { mode: 'create' }
    }
  }
]
