import { Meta, StoryObj } from '@storybook/react'
import { Link } from '@components/atoms/link'

const meta = {
  title: 'Atoms/Link',
  component: Link,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: { to: '/view-profile' }
} satisfies Meta<typeof Link>

export default meta

type Story = StoryObj<typeof meta>

export const LinkStory: Story = {
  render: (args) => <Link {...args}>Hello Link</Link>
}
