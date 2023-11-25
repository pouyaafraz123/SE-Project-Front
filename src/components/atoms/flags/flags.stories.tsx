import type { Meta as StoryMeta, StoryObj } from '@storybook/react'
import { Flag } from './index'
import '@/assets/flags/flag-icons-min.css'
import '@/assets/flags/flag-icons.css'

const Meta = {
  title: 'Atoms/Flag',
  component: Flag,
  parameters: {
    layout: 'padded'
  },
  tags: ['autodocs']
} satisfies StoryMeta<typeof Flag>

export default Meta
type Story = StoryObj<typeof Meta>

export const IconFlag: Story = {
  args: {
    country: 'us'
  }
}
