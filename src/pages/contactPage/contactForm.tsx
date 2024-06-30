import { BasePage } from '@pages/basePage/basePage.tsx'
import { ContactUs } from '@/templates/contactUs'

export function Component() {
  return (
    <BasePage>
      <ContactUs onSubmit={() => {}} />
    </BasePage>
  )
}
