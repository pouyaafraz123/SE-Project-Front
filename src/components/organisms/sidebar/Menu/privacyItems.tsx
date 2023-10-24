import { useTranslation } from 'react-i18next'
import { SidebarMenu } from '../sidebarMenu'
import { SidebarMenuItem } from '../MenuItem'

export function PrivacyItems() {
  const { t } = useTranslation('sidebar')
  return (
    <SidebarMenu name={t('MenuTitle.privacy')}>
      <SidebarMenuItem
        iconName='shield-keyhole'
        items={{ name: 'privacy', path: 'privacy' }}
      />
      <SidebarMenuItem
        iconName='help'
        items={{ name: 'helpCenter', path: 'help' }}
      />
    </SidebarMenu>
  )
}
