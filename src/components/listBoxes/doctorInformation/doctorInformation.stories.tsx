import type { Meta as StoryMeta, StoryObj } from '@storybook/react'
import { DoctorInformation } from './index'

const Meta = {
  title: 'ListBoxes/DoctorInformation',
  component: DoctorInformation,
  parameters: {
    layout: 'padded'
  },
  tags: ['autodocs']
} satisfies StoryMeta<typeof DoctorInformation>

export default Meta
type Story = StoryObj<typeof Meta>

export const Default: Story = {
  args: {
    data: {
      avatar: '',
      city: 'تهران',
      doctorId: 'f1a9c5d',
      education: 'فلوشیپ',
      firstName: 'محسن ',
      gender: 'مرد',
      id: 1,
      lastName: 'محمودیه',
      speciality: 'جراحی عمومی'
    }
  }
}
