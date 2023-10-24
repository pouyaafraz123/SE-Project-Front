import { useTranslation } from 'react-i18next'
import { SidebarMenuItem } from '../MenuItem'
import { SidebarMenu } from '../sidebarMenu'
import classes from '../styles.module.scss'

export function AccountSetting() {
  const { t } = useTranslation('sidebar')
  return (
    <SidebarMenu name={t('MenuTitle.account')}>
      <SidebarMenuItem
        iconName='user-check'
        items={{ name: 'editProfile', path: '' }}
      />
      <SidebarMenuItem
        iconName='lock-password'
        items={{ name: 'changePassword', path: '' }}
      />
      <SidebarMenuItem
        iconName='global'
        items={{ name: 'language', path: '' }}
      />
      <SidebarMenuItem
        className={classes.danger}
        iconName='logout'
        items={{ name: 'logout', path: '' }}
      />
    </SidebarMenu>
  )
}
