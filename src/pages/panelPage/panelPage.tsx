import { BasePage } from '@pages/basePage/basePage.tsx'
import { useProfile } from '@api/profile'
import { PanelTemplate } from '@/templates/panel'

export function Component() {
  const { data } = useProfile()

  return (
    <BasePage isNeedBack>
      <PanelTemplate id={data?.data?.uuid || ''} />
    </BasePage>
  )
}
