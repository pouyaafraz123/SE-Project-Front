import type { Meta as StoryMeta, StoryObj } from '@storybook/react'
import { StaffForm } from './index'

const Meta = {
  title: 'Templates/userManagement/Staff/StaffForm',
  component: StaffForm,
  parameters: {
    layout: 'padded'
  }
} satisfies StoryMeta<typeof StaffForm>

export default Meta
type Story = StoryObj<typeof Meta>

export const Default: Story = {
  render: (args) => <StaffForm {...args} />
}
