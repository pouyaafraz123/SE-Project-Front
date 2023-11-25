import { Meta, StoryObj } from '@storybook/react'
import { HeaderTabGroup } from '@components/molecules/headerTabGroup'

const meta = {
  title: 'Molecules/HeaderTabGroup',
  component: HeaderTabGroup,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {
    selectedKey: '1',
    tabs: [
      { key: '1', title: 'عنوان' },
      { key: '2', title: 'عنوان بلند' }
    ]
  }
} satisfies Meta<typeof HeaderTabGroup>

export default meta

type Story = StoryObj<typeof meta>

export const HeaderTabGroupStory: Story = {
  render: (args) => <HeaderTabGroup {...args} />
}
