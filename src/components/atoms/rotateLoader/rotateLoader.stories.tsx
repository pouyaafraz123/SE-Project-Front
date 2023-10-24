import { Meta, StoryObj } from '@storybook/react'
import { RotateLoader } from '@/components/atoms/rotateLoader/rotateLoader.tsx'

const meta = {
  title: 'Atoms/Loader/RotateLoader',
  component: RotateLoader,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {}
} satisfies Meta<typeof RotateLoader>

export default meta

type Story = StoryObj<typeof meta>

export const DefaultRotateLoader: Story = {
  render: (args) => <RotateLoader {...args} />
}
