import type { Meta as StoryMeta, StoryObj } from '@storybook/react'
import { Separator } from './index'

const Meta = {
  title: 'Atoms/Separator',
  component: Separator,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies StoryMeta<typeof Separator>

export default Meta
type Story = StoryObj<typeof Meta>

export const Default: Story = {
  render: (args) => <Separator {...args} />
}
