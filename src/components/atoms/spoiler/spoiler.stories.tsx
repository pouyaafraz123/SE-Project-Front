import { Meta, StoryObj } from '@storybook/react'
import { Spoiler } from '@/components/atoms/spoiler'

const meta = {
  title: 'atoms/spoiler',
  component: Spoiler,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Spoiler>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    value: '98-9308093354'
  }
}
