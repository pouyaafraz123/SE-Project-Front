import { path as financialPath } from './financial/path'
import { path as usersPath } from './userManagement/usersPath'
import { path as hfPath } from './hf/path'
import { path as testPath } from './testRoutes/path'

export const path = {
  test: testPath,
  hf: hfPath,
  users: usersPath,
  financial: financialPath
}
