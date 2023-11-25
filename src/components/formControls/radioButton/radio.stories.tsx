import type { Meta as StoryMeta, StoryObj } from '@storybook/react'
import { RadioButton } from './index'

const Meta = {
  title: 'formControl/RadioButton',
  component: RadioButton,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {
    selectedValue: 'first',
    label: 'Label',
    value: 'first',
    onChange(value) {
      console.log(value)
    }
  }
} satisfies StoryMeta<typeof RadioButton>

export default Meta
type Story = StoryObj<typeof Meta>

export const Default: Story = {
  render: (args) => <RadioButton {...args}></RadioButton>
}
export const Disabled: Story = {
  render: (args) => <RadioButton {...args} disabled />
}
export const ReadOnly: Story = {
  render: (args) => <RadioButton {...args} readOnly />
}
