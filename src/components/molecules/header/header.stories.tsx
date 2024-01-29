import { Meta, StoryObj } from '@storybook/react'
import { Header } from '@components/molecules/header/header.tsx'

const meta = {
  title: 'Molecules/Header',
  component: Header
} satisfies Meta<typeof Header>

export default meta

type Story = StoryObj<typeof meta>

export const HeaderStory: Story = {
  args: {}
}
