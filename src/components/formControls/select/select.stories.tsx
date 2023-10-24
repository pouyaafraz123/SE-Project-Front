import type { Meta as StoryMeta, StoryObj } from '@storybook/react'
import { Select } from './index'

const Meta = {
  title: 'formControl/Select',
  component: Select,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {
    options: [
      { key: 1, value: 'مرد' },
      { key: 2, value: 'زن' },
      { key: 3, value: 'سایر' }
    ],
    placeholder: 'انتخاب کنید',
    value: { key: 1, value: 'مرد' }
  }
} satisfies StoryMeta<typeof Select>

export default Meta
type Story = StoryObj<typeof Meta>

export const Default: Story = {
  render: (args) => <Select {...args} />
}
export const Error: Story = {
  render: (args) => <Select {...args} validation='error' />
}
export const Placeholder: Story = {
  render: (args) => <Select {...args} value={{ key: '', value: '' }} />
}
export const ReadOnly: Story = {
  render: (args) => <Select {...args} readOnly />
}
export const Disabled: Story = {
  render: (args) => <Select {...args} disabled />
}
