import { Meta, StoryObj } from '@storybook/react'
import { Icon } from '@components/atoms/icons'
import { IconButton } from '@/components/molecules/iconButton'

const meta = {
  title: 'Molecules/Button/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: { label: 'Lorem Ipsum', icon: <Icon name='figma' type='linear' /> }
} satisfies Meta<typeof IconButton>

export default meta

type Story = StoryObj<typeof meta>

export const DefaultIconButton: Story = {
  render: (args) => <IconButton {...args} />
}
