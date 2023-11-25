import type { Meta as StoryMeta, StoryObj } from '@storybook/react'
import { TimeInput } from './index'

const Meta = {
  title: 'formControl/TimeInput',
  component: TimeInput,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies StoryMeta<typeof TimeInput>

export default Meta
type Story = StoryObj<typeof Meta>

export const Default: Story = {
  render: (args) => <TimeInput {...args} />
}
export const Error: Story = {
  render: (args) => <TimeInput {...args} validation='error' />
}
export const Placeholder: Story = {
  render: (args) => <TimeInput {...args} defaultValue='' />
}
export const ReadOnly: Story = {
  render: (args) => <TimeInput {...args} readOnly />
}
export const Disabled: Story = {
  render: (args) => <TimeInput {...args} disabled />
}
