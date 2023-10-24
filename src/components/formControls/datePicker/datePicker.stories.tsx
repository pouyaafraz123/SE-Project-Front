import type { Meta as StoryMeta, StoryObj } from '@storybook/react'
import { DatePicker } from './datePicker'

const Meta = {
  title: 'formControl/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {
    date: new Date('2010/7/10')
  }
} satisfies StoryMeta<typeof DatePicker>

export default Meta
type Story = StoryObj<typeof Meta>

export const Default: Story = {
  render: (args) => <DatePicker {...args} />
}
export const Error: Story = {
  render: (args) => <DatePicker {...args} validation='error' />
}
export const Placeholder: Story = {
  render: (args) => <DatePicker {...args} date={undefined} />
}
export const ReadOnly: Story = {
  render: (args) => <DatePicker {...args} readOnly />
}
export const Disabled: Story = {
  render: (args) => <DatePicker {...args} disabled />
}
