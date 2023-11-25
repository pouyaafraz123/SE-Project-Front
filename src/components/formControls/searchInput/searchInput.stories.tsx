import type { Meta as StoryMeta, StoryObj } from '@storybook/react'
import { SearchInput } from './index'

const Meta = {
  title: 'formControl/SearchInput',
  component: SearchInput,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {}
} satisfies StoryMeta<typeof SearchInput>

export default Meta
type Story = StoryObj<typeof Meta>

export const Default: Story = {
  render: (args) => <SearchInput {...args} />
}
