import { Meta, StoryObj } from '@storybook/react'
import { InfoCard } from '@/components/molecules/infoCard/infoCard.tsx'
import { FigmaLinear } from '@/components/icons'

const meta = {
  title: 'Molecules/InfoCard',
  component: InfoCard,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {
    icon: <FigmaLinear />,
    color: 'success',
    value: 1233,
    title: 'لیست ملاقات ها',
    variant: 'user-main'
  }
} satisfies Meta<typeof InfoCard>

export default meta

type Story = StoryObj<typeof meta>

export const InfoCardStory: Story = {
  render: (args) => <InfoCard {...args} />
}
