import type { Meta as StoryMeta, StoryObj } from '@storybook/react'
import { Stepper } from './index'

const Meta = {
  title: 'Molecules/Stepper/stepper',
  component: Stepper,
  parameters: {
    layout: 'padded'
  },
  args: {
    currentStep: 2,
    steps: [
      { name: 'stepper.satisfaction' },
      { name: 'stepper.medicalHistory' },
      { name: 'stepper.doctorPrescription' },
      { name: 'stepper.doctorRecommendation' },
      { name: 'stepper.confirmDoctorPrescription' }
    ]
  },
  tags: ['autodocs']
} satisfies StoryMeta<typeof Stepper>

export default Meta
type Story = StoryObj<typeof Meta>

export const Default: Story = {
  render: (args) => <Stepper {...args}></Stepper>
}
