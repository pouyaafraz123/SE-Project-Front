import { Meta, StoryObj } from '@storybook/react'
import { ISliderItem } from '@components/organisms/productSlider'
import { Landing } from '@/templates/landing/landing.tsx'

const meta = {
  title: 'Templates/Landing',
  component: Landing
} satisfies Meta<typeof Landing>

export default meta

type Story = StoryObj<typeof meta>

const bannerProducts: ISliderItem[] = [...Array(10).keys()]?.map((key) => {
  return {
    title: 'محصول نمونه ' + (key + 1),
    img: `https://picsum.photos/seed/${Math.random()}/600/400`,
    id: key
  }
})

export const LandingStory: Story = {
  args: {
    bannerProducts: { items: bannerProducts }
  }
}
