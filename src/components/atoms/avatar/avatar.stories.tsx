import { Meta, StoryObj } from '@storybook/react'
import { Avatar } from '@/components/atoms/avatar'

const meta = {
  title: 'atoms/avatar',
  component: Avatar,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Avatar>

export default meta

type Story = StoryObj<typeof meta>

export const Small: Story = {
  args: {
    size: 'small',
    userInfo: {
      firstName: 'مریم',
      lastName: 'محمدی',
      imageUrl: ''
    }
  }
}

export const Medium: Story = {
  args: {
    size: 'medium',
    userInfo: {
      firstName: 'مریم',
      lastName: 'محمدی',
      imageUrl: ''
    }
  }
}

export const Large: Story = {
  args: {
    size: 'large',
    userInfo: {
      firstName: 'مریم',
      lastName: 'محمدی',
      imageUrl: ''
    }
  }
}

export const Sidebar: Story = {
  args: {
    size: 'small',
    userInfo: {
      firstName: 'مریم',
      lastName: 'محمدی',
      imageUrl: ''
    },
    role: 'super-admin',
    variant: 50,
    sidebar: true,
    roleValue: 'مدیر ارشد'
  }
}
