import { Meta, StoryObj } from '@storybook/react'
import '@styles/main.css'
import { Icon } from '@components/atoms/icons'
import { Button } from '@/components/atoms/button'

const meta = {
  title: 'Atoms/Button/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: { ...Button.defaultProps }
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const DefaultButton: Story = {
  render: (args) => (
    <div>
      <Button {...args} label={'Lorem Ipsum'} />
    </div>
  )
}

export const IconButton: Story = {
  render: (args) => (
    <div>
      <Button
        {...args}
        label={'Lorem Ipsum'}
        icon={<Icon type='linear' name='figma' />}
      />
    </div>
  )
}
