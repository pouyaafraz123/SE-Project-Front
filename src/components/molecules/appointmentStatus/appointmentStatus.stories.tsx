import { Meta, StoryObj } from '@storybook/react'
import { AppointmentStatus } from '@components/molecules/appointmentStatus'

const meta = {
  title: 'Molecules/Status/AppointmentStatus',
  component: AppointmentStatus,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: { status: 'pending' }
} satisfies Meta<typeof AppointmentStatus>

export default meta

type Story = StoryObj<typeof meta>

export const AppointmentStatusStory: Story = {
  render: (args) => <AppointmentStatus {...args} />
}
