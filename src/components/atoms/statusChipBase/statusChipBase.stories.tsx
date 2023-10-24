import { Meta, StoryObj } from '@storybook/react'
import { StatusChipBase } from '@/components/atoms/statusChipBase'

const meta = {
  title: 'Atoms/Chip/StatusChipBase',
  component: StatusChipBase,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: { label: 'تکمیل شده' }
} satisfies Meta<typeof StatusChipBase>

export default meta

type Story = StoryObj<typeof meta>

export const StatusChipBaseStory: Story = {
  render: (args) => <StatusChipBase {...args} />
}
