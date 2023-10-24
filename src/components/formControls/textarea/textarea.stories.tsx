import type { Meta as StoryMeta, StoryObj } from '@storybook/react'
import { Textarea } from './index'

const Meta = {
  title: 'formControl/TextArea',
  component: Textarea,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  args: {
    defaultValue: 'متن',
    placeholder: 'تایپ کنید'
  },
  decorators: [
    (Story) => (
      <div className='m-l3'>
        <Story />
      </div>
    )
  ]
} satisfies StoryMeta<typeof Textarea>

export default Meta
type Story = StoryObj<typeof Meta>

export const Default: Story = {
  render: (args) => <Textarea {...args} />
}
export const Error: Story = {
  render: (args) => <Textarea {...args} validation='error' />
}
export const Placeholder: Story = {
  render: (args) => <Textarea {...args} defaultValue='' />
}
export const ReadOnly: Story = {
  render: (args) => <Textarea {...args} readOnly />
}
export const Disabled: Story = {
  render: (args) => <Textarea {...args} disabled />
}
