import type { Meta as StoryMeta, StoryObj } from '@storybook/react'
import { DoctorForm } from './index'

const Meta = {
  title: 'Templates/userManagement/Doctor/DoctorForm',
  component: DoctorForm,
  parameters: {
    layout: 'padded'
  },
  args: {
    mode: 'create',
    onCancel() {},
    onSubmit(data) {}
  }
} satisfies StoryMeta<typeof DoctorForm>

export default Meta
type Story = StoryObj<typeof Meta>

export const Default: Story = {
  render: (args) => <DoctorForm {...args} />
}
