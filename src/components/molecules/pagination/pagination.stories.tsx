import { Meta, StoryObj } from '@storybook/react'
import { Pagination } from '@/components/molecules/pagination'

const meta = {
  title: 'Molecules/pagination',
  component: Pagination,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Pagination>

export default meta

type Story = StoryObj<typeof meta>

export const Initial: Story = {
  args: {
    currentPage: 1,
    totalPages: 50
  }
}

export const Middle: Story = {
  args: {
    currentPage: 40,
    totalPages: 50
  }
}

export const Final: Story = {
  args: {
    currentPage: 50,
    totalPages: 50
  }
}
