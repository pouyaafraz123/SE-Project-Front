import { BasePage } from '@pages/basePage/basePage.tsx'
import { ContactUs } from '@/templates/contactUs'
import { notify } from '@/components/atoms/notify'

export function Component() {
  return (
    <BasePage>
      <ContactUs
        onSubmit={() => {
          notify.success({
            title: 'موفقیت',
            text: 'پیامت به ما رسید🫂'
          })
        }}
      />
    </BasePage>
  )
}
