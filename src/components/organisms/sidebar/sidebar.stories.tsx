import type { Meta as StoryMeta, StoryObj } from '@storybook/react'
import { Sidebar, sidebarFn } from './index'
import { Typography } from '@/components/atoms/typography'
import { Button } from '@/components/atoms/button'
import { sidebarItems } from '@/constants/sidebarItems'

const Meta = {
  title: 'Organisms/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen'
  },
  args: {
    header: {
      firstName: 'ناصر',
      lastName: 'محمدی',
      hfName: 'بیمارستان الغدیر'
    }
  }
  // tags: ['autodocs']
} satisfies StoryMeta<typeof Sidebar>

export default Meta
type Story = StoryObj<typeof Meta>

export const Default: Story = {
  render: (args) => (
    <Sidebar {...args}>
      <ChildrenDiv />
    </Sidebar>
  )
}
function ChildrenDiv() {
  const { setItems } = sidebarFn
  return (
    <div>
      <Button
        mode='default'
        onClick={() => setItems(sidebarItems['super-admin'])}
      >
        Set Super AdminItems
      </Button>
    </div>
  )
}
