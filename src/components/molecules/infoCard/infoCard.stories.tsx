import { Meta, StoryObj } from '@storybook/react'
import { Icon } from '@components/atoms/icons'
import { InfoCard } from '@/components/molecules/infoCard/infoCard.tsx'

const meta = {
  title: 'Molecules/InfoCard',
  component: InfoCard,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {
    icon: <Icon name='figma' type='linear' />,
    color: 'success',
    value: 1233,
    title: 'لیست ملاقات ها',
    variant: 'user-all'
  }
} satisfies Meta<typeof InfoCard>

export default meta

type Story = StoryObj<typeof meta>

export const InfoCardStory: Story = {
  render: (args) => <InfoCard {...args} />
}
