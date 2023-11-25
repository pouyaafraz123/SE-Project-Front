import type { Meta as StoryMeta, StoryObj } from '@storybook/react'
import { Subtitle } from './index'

const Meta = {
  title: 'Atoms/Subtitle',
  component: Subtitle,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: { title: 'infoSubtitle.personal' }
} satisfies StoryMeta<typeof Subtitle>

export default Meta
type Story = StoryObj<typeof Meta>

export const Default: Story = {
  render: (args) => <Subtitle {...args} />
}
