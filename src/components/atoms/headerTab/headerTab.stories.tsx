import { Meta, StoryObj } from '@storybook/react'
import { HeaderTab } from '@components/atoms/headerTab'

const meta = {
  title: 'Atoms/HeaderTab',
  component: HeaderTab,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: { title: 'عنوان' }
} satisfies Meta<typeof HeaderTab>

export default meta

type Story = StoryObj<typeof meta>

export const HeaderTabStory: Story = {
  render: (args) => <HeaderTab {...args} />
}
