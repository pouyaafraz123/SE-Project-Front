import type { Meta as StoryMeta, StoryObj } from '@storybook/react'
import { FileInput } from './index'

const Meta = {
  title: 'formControl/FileInput',
  component: FileInput,
  parameters: {
    layout: 'padded'
  },
  tags: ['autodocs'],
  args: { type: 'image', label: 'doctorAvatar' }
} satisfies StoryMeta<typeof FileInput>

export default Meta
type Story = StoryObj<typeof Meta>

export const Image: Story = {
  render: (args) => <FileInput {...args} />
}
export const Excel: Story = {
  render: (args) => <FileInput {...args} type='excel' />
}
export const Multiple: Story = {
  render: (args) => <FileInput {...args} type='multiType' />
}
