import { Meta, StoryObj } from '@storybook/react'
import { Statistics } from './statistics'

const meta = {
  title: 'Organisms/Statistics',
  component: Statistics,
  parameters: {
    layout: 'fullscreen'
  },
  args: {
    data: [
      { key: 'user-all', name: 'همه کاربران', value: 500 },
      {
        key: 'user-active',
        name: 'کاربران فعال',
        value: 480
      },
      {
        key: 'user-denied',
        name: 'کاربران غیرفعال',
        value: 5
      },
      {
        key: 'user-pending',
        name: 'کاربران در انتظار تایید',
        value: 15
      }
    ]
  }
} satisfies Meta<typeof Statistics>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => <Statistics {...args} />
}
