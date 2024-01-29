import { Icon } from '@components/atoms/icons'
import type { Meta as StoryMeta, StoryObj } from '@storybook/react'
import { Input } from './index'

const Meta = {
  title: 'formControl/Input',
  component: Input,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {
    defaultValue: 'متن',
    placeholder: 'تایپ کنید'
  }
} satisfies StoryMeta<typeof Input>

export default Meta
type Story = StoryObj<typeof Meta>

export const Default: Story = {
  render: (args) => <Input {...args} />
}
export const WithImageTypeIcon: Story = {
  render: (args) => (
    <Input {...args} iconType='image' icon={<Icon name='arrow-down' />} />
  )
}
export const WithButtonTypeIcon: Story = {
  render: (args) => (
    <Input {...args} iconType='button' icon={<Icon name='magnifer' />} />
  )
}
export const IsLoading: Story = {
  render: (args) => <Input {...args} isLoading iconType='button' />
}
export const IsError: Story = {
  render: (args) => <Input {...args} isError iconType='button' />
}
export const Error: Story = {
  render: (args) => <Input {...args} validation='error' />
}
export const Placeholder: Story = {
  render: (args) => <Input {...args} defaultValue='' />
}
export const ReadOnly: Story = {
  render: (args) => <Input {...args} readOnly />
}
export const Disabled: Story = {
  render: (args) => <Input {...args} disabled />
}
