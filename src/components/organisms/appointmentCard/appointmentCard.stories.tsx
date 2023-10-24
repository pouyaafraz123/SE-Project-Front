import { Meta, StoryObj } from '@storybook/react'
import { AppointmentCard } from '@components/organisms/appointmentCard'

const meta = {
  title: 'Organisms/Card/AppointmentCard',
  component: AppointmentCard,
  parameters: {
    layout: 'fullscreen'
  },
  decorators: [
    (Story) => (
      <div className='m-l3'>
        <Story />
      </div>
    )
  ],
  tags: ['autodocs'],
  args: {
    status: 'pending',
    data: {
      appointmentInfo: {
        id: 'b8e4f1c',
        name: 'نام مرکز درمانی و بهداشتی',
        details: {
          date: 'تاریخ ملاقات'
        }
      },
      patientInfo: {
        id: 'c9f7a2d',
        name: 'نام',
        lastName: 'مریض',
        link: '/patient/view-profile/1',
        details: { age: '۰۰ ساله', gender: 'جنسیت' }
      },
      doctorInfo: {
        id: 'b8e4f1c',
        name: 'نام',
        lastName: 'دکتر',
        link: '/doctor/view-profile/1',
        details: { degree: 'تحصیلات پزشک', speciality: 'تخصص' }
      }
    }
  }
} satisfies Meta<typeof AppointmentCard>

export default meta

type Story = StoryObj<typeof meta>

export const AppointmentCardStory: Story = {
  render: (args) => <AppointmentCard {...args} />
}
