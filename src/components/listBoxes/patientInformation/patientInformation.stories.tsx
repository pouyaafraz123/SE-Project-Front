import type { Meta as StoryMeta, StoryObj } from '@storybook/react'
import { PatientInformation } from './index'

const Meta = {
  title: 'ListBoxes/PatientInformation',
  component: PatientInformation,
  parameters: {
    layout: 'padded'
  },
  tags: ['autodocs']
} satisfies StoryMeta<typeof PatientInformation>

export default Meta
type Story = StoryObj<typeof Meta>

export const Default: Story = {
  args: {
    data: {
      age: 23,
      avatar: '',
      firstName: 'لیلا',
      lastName: 'محمدی',
      gender: 'زن',
      patientId: 'd6f8e4b',
      id: 1
    }
  }
}
export const WithAction: Story = {
  args: {
    data: {
      age: 23,
      avatar: '',
      firstName: 'لیلا',
      lastName: 'محمدی',
      gender: 'زن',
      patientId: 'd6f8e4b',
      id: 1
    },
    showExperiments: true
  }
}
