import { useTranslation } from 'react-i18next'
import { SidebarMenuItem } from '../MenuItem'
import { SidebarMenu } from '../sidebarMenu'
import { LogoutMenuItem } from './logout'

export function AccountSetting() {
  const { t } = useTranslation('sidebar')
  return (
    <SidebarMenu name={t('MenuTitle.account')}>
      <SidebarMenuItem
        iconName='user-check'
        name='editProfile'
        items={{ path: 'edit-profile' }}
      />
      <SidebarMenuItem
        iconName='lock-password'
        name='changePassword'
        items={{ path: 'change-password' }}
      />
      <SidebarMenuItem
        iconName='global'
        name='language'
        items={{ path: 'language' }}
      />
      <LogoutMenuItem />
    </SidebarMenu>
  )
}
