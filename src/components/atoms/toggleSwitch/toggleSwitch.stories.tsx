import { Meta, StoryObj } from '@storybook/react'
import { ToggleSwitch } from '@/components/atoms/toggleSwitch'

const meta = {
  title: 'atoms/toggleSwitch',
  component: ToggleSwitch,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof ToggleSwitch>

export default meta

type Story = StoryObj<typeof meta>

export const DefaultToggleSwitch: Story = {
  args: {
    checked: true,
    onChange(value) {}
  }
}
