import { Meta, StoryObj } from '@storybook/react'
import { AuthContainer } from '@/templates/auth/authContainer.tsx'

const meta = {
  title: 'Templates/Auth/AuthContainer',
  component: AuthContainer,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs']
} satisfies Meta<typeof AuthContainer>

export default meta

type Story = StoryObj<typeof meta>

export const AuthContainerStory: Story = {
  name: 'Default',
  args: {}
}
