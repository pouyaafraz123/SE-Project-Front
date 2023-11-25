import type { Meta as StoryMeta, StoryObj } from '@storybook/react'
import { Step } from './step'

const Meta = {
  title: 'Molecules/Stepper/Step',
  component: Step,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {
    isCurrentStep: false,
    isPassed: true,
    name: 'stepper.confirmDoctorPrescription',
    onClick() {},
    index: 1
  }
} satisfies StoryMeta<typeof Step>

export default Meta
type Story = StoryObj<typeof Meta>

export const CurrentStep: Story = {
  render: (args) => <Step {...args} isCurrentStep />
}
export const Passed: Story = {
  render: (args) => <Step {...args} isPassed />
}
export const NotPassed: Story = {
  render: (args) => <Step {...args} isPassed={false} />
}
