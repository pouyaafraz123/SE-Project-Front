import type { Meta as StoryMeta, StoryObj } from '@storybook/react'
import { Password } from './index'

const Meta = {
  title: 'formControl/Password',
  component: Password,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {
    defaultValue: '123456798',
    placeholder: 'رمز عبور'
  }
} satisfies StoryMeta<typeof Password>

export default Meta
type Story = StoryObj<typeof Meta>

export const Default: Story = {
  render: (args) => <Password {...args} />
}
export const Placeholder: Story = {
  render: (args) => <Password {...args} defaultValue='' />
}
export const ReadOnly: Story = {
  render: (args) => <Password {...args} readOnly />
}
export const Disabled: Story = {
  render: (args) => <Password {...args} disabled />
}
