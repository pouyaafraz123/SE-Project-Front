import { Meta, StoryObj } from '@storybook/react'
import { CategoryBanner } from '@components/atoms/categoryBanner/categoryBanner.tsx'

const meta = {
  title: 'Atoms/CategoryBanner',
  component: CategoryBanner,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof CategoryBanner>

export default meta

type Story = StoryObj<typeof meta>

export const CategoryBannerStory: Story = {
  args: {
    title: 'موبایل  و کالای دیجیتال',
    bannerUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/800px-Shaqi_jrvej.jpg',
    id: 212
  }
}
