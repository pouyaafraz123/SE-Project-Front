import { useTranslation } from 'react-i18next'
import { ColorSchemaContainer, DarkModeToggleContainer } from '../components'
import { SidebarMenu } from '../sidebarMenu'

export function AppearanceSettings() {
  const { t } = useTranslation('sidebar')
  return (
    <SidebarMenu name={t('MenuTitle.appearance')}>
      <DarkModeToggleContainer />
      <ColorSchemaContainer />
    </SidebarMenu>
  )
}
