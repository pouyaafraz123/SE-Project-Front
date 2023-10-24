import { Meta, StoryObj } from '@storybook/react'
import { DoctorCard } from '@/components/organisms/doctorCard'
import '../../../assets/icons/style.css'

const meta = {
  title: 'organisms/doctorCard',
  component: DoctorCard,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof DoctorCard>

export default meta

type Story = StoryObj<typeof meta>

const doctorInfo = {
  avatar:
    'https://www.google.com/url?sa=i&url=http%3A%2F%2Fwww.shadowsphotography.co%2Fdiscover-photography-the-art-of-the-image%2F&psig=AOvVaw3FnsftYxd-eZdorNTDX30U&ust=1696588419814000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLDAosLa3oEDFQAAAAAdAAAAABAI',
  suggestionPercent: '۸۶% پیشنهاد',
  suggestionUsers: '(از ۴۷۷ کاربر)',
  firstName: 'مریم',
  lastName: 'حسین آبادی',
  expertise: 'تخصص کودکان و نوزادان',
  button: 'نوبت بگیرید'
}

export const doctorCard: Story = {
  args: {
    doctorInfo: doctorInfo
  }
}
