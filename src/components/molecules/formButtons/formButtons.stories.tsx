import { Meta, StoryObj } from '@storybook/react'
import { FormButtons } from '@/components/molecules/formButtons'

const meta = {
  title: 'Molecules/Button/FormButtons',
  component: FormButtons,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof FormButtons>

export default meta

type Story = StoryObj<typeof meta>

export const DefaultFormButtons: Story = {
  render: (args) => <FormButtons {...args} />
}
