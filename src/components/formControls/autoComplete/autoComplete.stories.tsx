import type { Meta as StoryMeta, StoryObj } from '@storybook/react'
import { AutoComplete } from './index'

const Meta = {
  title: 'formControl/AutoComplete',
  component: AutoComplete,
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
} satisfies StoryMeta<typeof AutoComplete>

export default Meta
type Story = StoryObj<typeof Meta>

export const Default: Story = {
  render: (args) => <AutoComplete {...args} />
}
export const Error: Story = {
  render: (args) => <AutoComplete {...args} validation='error' />
}
export const Placeholder: Story = {
  render: (args) => <AutoComplete {...args} value={{ key: '', value: '' }} />
}
export const ReadOnly: Story = {
  render: (args) => <AutoComplete {...args} readOnly />
}
export const Disabled: Story = {
  render: (args) => <AutoComplete {...args} disabled />
}
