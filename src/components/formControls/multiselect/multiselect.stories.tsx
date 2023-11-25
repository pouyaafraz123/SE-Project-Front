import type { Meta as StoryMeta, StoryObj } from '@storybook/react'
import { Multiselect } from '../select/index'

const Meta = {
  title: 'formControl/Multiselect',
  component: Multiselect,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {
    options: [
      { key: '1', value: 'مرد' },
      { key: '2', value: 'زن' },
      { key: '3', value: 'سایر' }
    ],
    placeholder: 'انتخاب کنید',
    value: [{ key: '1', value: 'مرد' }]
  }
} satisfies StoryMeta<typeof Multiselect>

export default Meta
type Story = StoryObj<typeof Meta>

export const Default: Story = {
  render: (args) => <Multiselect {...args} />
}
export const Error: Story = {
  render: (args) => <Multiselect {...args} validation='error' />
}
export const Placeholder: Story = {
  render: (args) => <Multiselect {...args} value={[]} />
}
export const ReadOnly: Story = {
  render: (args) => <Multiselect {...args} readOnly />
}
export const Disabled: Story = {
  render: (args) => <Multiselect {...args} disabled />
}
