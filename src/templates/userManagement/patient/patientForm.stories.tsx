import type { Meta as StoryMeta, StoryObj } from '@storybook/react'
import { PatientForm } from './index'

const Meta = {
  title: 'Templates/userManagement/Patient/PatientForm',
  component: PatientForm,
  parameters: {
    layout: 'padded'
  },
  args: {
    mode: 'create',
    onCancel() {},
    onSubmit(data) {}
  }
} satisfies StoryMeta<typeof PatientForm>

export default Meta
type Story = StoryObj<typeof Meta>

export const Default: Story = {
  render: (args) => <PatientForm {...args} />
}
