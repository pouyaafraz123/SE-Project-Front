import { Meta, StoryObj } from '@storybook/react'
import { Swiper } from '@components/atoms/swiper/swiper.tsx'
import { InfoCard } from '@components/molecules/infoCard'

const meta = {
  title: 'Atoms/Swiper',
  component: Swiper,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {
    children: null
  }
} satisfies Meta<typeof Swiper>

export default meta

type Story = StoryObj<typeof meta>

export const SwiperStory: Story = {
  render: () => (
    <Swiper>
      <InfoCard
        variant={'appointment-main'}
        value={1000 * Number(Math.random().toFixed(3))}
      />
    </Swiper>
  )
}

export const SwiperStory2: Story = {
  render: () => (
    <Swiper>
      <InfoCard
        variant={'appointment-main'}
        value={1000 * Number(Math.random().toFixed(3))}
      />
      <InfoCard
        variant={'appointment-pending'}
        value={1000 * Number(Math.random().toFixed(3))}
      />
      <InfoCard
        variant={'appointment-danger'}
        value={1000 * Number(Math.random().toFixed(3))}
      />
    </Swiper>
  )
}

export const SwiperStory3: Story = {
  render: () => (
    <Swiper>
      <InfoCard
        variant={'appointment-main'}
        value={1000 * Number(Math.random().toFixed(3))}
      />
      <InfoCard
        variant={'appointment-pending'}
        value={1000 * Number(Math.random().toFixed(3))}
      />
      <InfoCard
        variant={'appointment-danger'}
        value={1000 * Number(Math.random().toFixed(3))}
      />
      <InfoCard
        variant={'appointment-main'}
        value={1000 * Number(Math.random().toFixed(3))}
      />
      <InfoCard
        variant={'appointment-pending'}
        value={1000 * Number(Math.random().toFixed(3))}
      />
      <InfoCard
        variant={'appointment-danger'}
        value={1000 * Number(Math.random().toFixed(3))}
      />
      <InfoCard
        variant={'appointment-main'}
        value={1000 * Number(Math.random().toFixed(3))}
      />
      <InfoCard
        variant={'appointment-pending'}
        value={1000 * Number(Math.random().toFixed(3))}
      />
      <InfoCard
        variant={'appointment-danger'}
        value={1000 * Number(Math.random().toFixed(3))}
      />
    </Swiper>
  )
}
