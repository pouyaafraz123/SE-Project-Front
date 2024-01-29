import type { Meta as StoryMeta, StoryObj } from '@storybook/react'
import { NumberInput } from './index'

const Meta = {
  title: 'formControl/NumberInput',
  component: NumberInput,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {
    defaultValue: 1,
    placeholder: 'تایپ کنید'
  }
} satisfies StoryMeta<typeof NumberInput>

export default Meta
type Story = StoryObj<typeof Meta>

export const Default: Story = {
  render: (args) => <NumberInput {...args} />
}
export const Range: Story = {
  render: (args) => (
    <NumberInput {...args} min={1} max={10} placeholder='range <1, 10>' />
  )
}
export const ReadOnly: Story = {
  render: (args) => <NumberInput {...args} readOnly />
}
export const Disabled: Story = {
  render: (args) => <NumberInput {...args} disabled />
}
