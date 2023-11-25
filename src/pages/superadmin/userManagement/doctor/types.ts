import {
  ICreateModeLoaderData,
  IEditModeLoaderData,
  IViewModeLoaderData
} from '@/interfaces'
import {
  doctorCreateParams,
  doctorEditParams,
  doctorViewParams
} from '@/routes/userManagement/usersPath'

export type IDoctorFormLoaderData =
  | IViewModeLoaderData<doctorViewParams>
  | IEditModeLoaderData<doctorEditParams>
  | ICreateModeLoaderData<doctorCreateParams>
