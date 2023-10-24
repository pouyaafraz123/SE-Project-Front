import { Meta, StoryObj } from '@storybook/react'
import { Chip } from '@/components/atoms/chip'

const meta = {
  title: 'atoms/chip',
  component: Chip,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Chip>

export default meta

type Story = StoryObj<typeof meta>

export const roleType: Story = {
  args: {
    value: ['doctor', 'cmo', 'super-admin'],
    name: ['doctor', 'cmo', 'super-admin']
  }
}

export const statusType: Story = {
  args: {
    value: 'status',
    name: 'pending'
  }
}
