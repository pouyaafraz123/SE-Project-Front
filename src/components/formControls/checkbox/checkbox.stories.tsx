import type { Meta as StoryMeta, StoryObj } from '@storybook/react'
import { Checkbox } from './index'

const Meta = {
  title: 'formControl/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {
    checked: false,
    label: 'Label',
    onChange(value) {
      console.log(value)
    }
  }
} satisfies StoryMeta<typeof Checkbox>

export default Meta
type Story = StoryObj<typeof Meta>

export const Default: Story = {
  render: (args) => <Checkbox {...args} disabled={false} />
}
export const Disabled: Story = {
  render: (args) => <Checkbox {...args} disabled />
}
