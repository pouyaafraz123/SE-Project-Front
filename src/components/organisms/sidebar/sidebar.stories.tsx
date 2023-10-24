import type { Meta as StoryMeta, StoryObj } from '@storybook/react'
import { Sidebar, sidebarFn } from './index'
import { Typography } from '@/components/atoms/typography'
import { Button } from '@/components/atoms/button'
import { superAdminItems } from '@/constants/sidebarItems'

const Meta = {
  title: 'Organisms/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen'
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
      <Button mode='default' onClick={() => setItems(superAdminItems)}>
        Set Super AdminItems
      </Button>
    </div>
  )
}
