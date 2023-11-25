import { useTranslation } from 'react-i18next'
import { SidebarMenu } from '../sidebarMenu'
import { SidebarMenuItem } from '../MenuItem'
import { useSidebarStore } from '..'

export function MainMenuItems() {
  const { t } = useTranslation('sidebar')
  const items = useSidebarStore((state) => state.items)
  return (
    <SidebarMenu name={t('MenuTitle.mainMenu')}>
      {items.map((item, index) => (
        <SidebarMenuItem
          key={index}
          iconName={item.iconName}
          name={item.name}
          items={item.items}
        />
      ))}
    </SidebarMenu>
  )
}
