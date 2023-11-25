import type { Meta as StoryMeta, StoryObj } from '@storybook/react'
import { PageLayout } from './index'

const Meta = {
  title: 'Layout/PageLayout',
  component: PageLayout,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  args: {
    title: 'pageTitle.usersManagement',
    breadcrumbs: [{ name: 'pageTitle.main', link: '/' }]
  }
} satisfies StoryMeta<typeof PageLayout>

export default Meta
type Story = StoryObj<typeof Meta>

export const Default: Story = {
  render: (args) => (
    <PageLayout {...args}>
      <div>children</div>
    </PageLayout>
  )
}
