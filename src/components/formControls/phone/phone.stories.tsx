import type { Meta as StoryMeta, StoryObj } from '@storybook/react'
import { Phone } from './index'

const Meta = {
  title: 'formControl/Phone',
  component: Phone,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {
    countries: [
      { key: '+98', flag: '', value: 'ایران' },
      { key: '+1', flag: '', value: 'آمریکا' }
    ],
    value: { code: '+98', number: '9379888584' },
    placeholder: 'شماره خود را وارد کنید'
  }
} satisfies StoryMeta<typeof Phone>

export default Meta
type Story = StoryObj<typeof Meta>

export const Default: Story = {
  render: (args) => <Phone {...args} />
}
export const Error: Story = {
  render: (args) => <Phone {...args} validation='error' />
}
export const Placeholder: Story = {
  render: (args) => <Phone {...args} value={{ code: '', number: '' }} />
}
export const ReadOnly: Story = {
  render: (args) => <Phone {...args} readOnly />
}
export const Disabled: Story = {
  render: (args) => <Phone {...args} disabled />
}
