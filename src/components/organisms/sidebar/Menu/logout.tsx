import { SidebarMenuItem } from '../MenuItem'
import classes from '../styles.module.scss'
import { useUserStore } from '@/stores'

export function LogoutMenuItem() {
  const { logout } = useUserStore()
  function logoutHandler() {
    logout()
  }
  return (
    <SidebarMenuItem
      className={classes.danger}
      iconName='logout'
      name='logout'
      items={{ onClick: logoutHandler }}
    />
  )
}
