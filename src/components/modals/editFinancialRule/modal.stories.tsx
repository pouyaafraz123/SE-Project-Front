import { Meta, StoryObj } from '@storybook/react'
import { WithModalControls } from '@decorators'
import { FinancialEditModal } from './modal'

const meta = {
  title: 'Organisms/Modal/EditFinancialRule',
  component: FinancialEditModal,
  parameters: {
    layout: 'padded'
  },
  decorators: [WithModalControls],
  args: {
    onSubmit: () => {},
    isOpen: true
  }
} satisfies Meta<typeof FinancialEditModal>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => <FinancialEditModal {...args} />
}
