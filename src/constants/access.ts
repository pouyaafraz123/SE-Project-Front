import { IRole } from '@/interfaces'
import { path } from '@/routes/path'

export const userAccess: { [key in IRole]: string[] } = {
  'super-admin': [
    '/',
    ...Object.values(path)
      .map((p) => Object.values(p).map((item) => item.route))
      .flat(2)
  ],
  'local-admin': ['/'],
  cmo: ['/'],
  doctor: ['/'],
  staff: ['/'],
  patient: ['/']
}
