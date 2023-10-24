import { Meta, StoryObj } from '@storybook/react'
import { PaginationButton } from '@/components/atoms/button/paginationButton'
import '../../../../assets/icons/style.css'

const meta = {
  title: 'atoms/button/paginationButton',
  component: PaginationButton,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof PaginationButton>

export default meta

type Story = StoryObj<typeof meta>

export const Active: Story = {
  args: {
    status: 'active',
    children: '5'
  }
}

export const Default: Story = {
  args: {
    status: 'default',
    children: '7'
  }
}

export const Prev: Story = {
  args: {
    status: 'default',
    children: (
      <>
        Prev
        <span className='icon-linear_arrow-left'></span>
      </>
    )
  }
}

export const Next: Story = {
  args: {
    status: 'default',
    children: (
      <>
        <span className='icon-linear_arrow-right'></span>
        Next
      </>
    )
  }
}

export const Disabled: Story = {
  args: {
    status: 'disabled',
    children: (
      <>
        <span className='icon-linear_arrow-right'></span>
        Next
      </>
    )
  }
}
