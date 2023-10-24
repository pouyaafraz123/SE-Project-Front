import { Meta, StoryObj } from '@storybook/react'
import { Tooltip } from '@/components/atoms/tooltip'

const meta = {
  title: 'Atoms/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: { text: 'Tooltip', pos: 'default' }
} satisfies Meta<typeof Tooltip>

export default meta

type Story = StoryObj<typeof meta>

export const DefaultTooltip: Story = {
  render: (args) => (
    <Tooltip {...args}>
      <div>Tooltip Child</div>
    </Tooltip>
  )
}
