import { Meta, StoryObj } from '@storybook/react'
import { Alert } from '@components/molecules/alert/alert.tsx'
import { useState } from 'react'
import { Button } from '@components/atoms/button'
import { TAlertProps } from '@components/molecules/alert/types.ts'

const meta = {
  title: 'Molecules/Alert',
  component: Alert,
  parameters: {
    layout: 'padded'
  },
  tags: ['autodocs'],
  args: { open: false, type: 'information', title: '' }
} satisfies Meta<typeof Alert>

export default meta

type Story = StoryObj<typeof meta>

function Container(args: TAlertProps) {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <Button mode={'main'}>Open Information Alert</Button>
      <Alert {...args} open={open} />
    </div>
  )
}

export const AlertStory: Story = {
  render: (args) => {
    return <Container {...args} />
  }
}
