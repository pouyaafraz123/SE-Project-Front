import { Meta, StoryObj } from '@storybook/react'
import { ProductSlider } from '@components/organisms/productSlider/productSlider.tsx'

const meta = {
  title: 'Organisms/ProductSlider',
  component: ProductSlider
} satisfies Meta<typeof ProductSlider>

export default meta

type Story = StoryObj<typeof meta>

export const ProductSliderStory: Story = {
  name: 'Default',
  args: {
    items: [
      {
        img: 'https://images-eds-ssl.xboxlive.com/image?url=7flt5HU26ZSS3Tgted_TMty0wzqMQYpm03yD7eAPRtQBYO5dMlD18uZxNDuKXvpqoIQ98JhFD0JZE25yvmdkL3AIp_IvH2W6_qekI6mI8TSNVa.cXBCK8rk2s9h0ks.bZDPbOTZ4YXbNGJaDQ2arYpEYPcskRU14E50J3DMyubfj8jgjNjncLcPmSOYdj2QPCEaAhNGDthEflof14ZU_4A--&h=720',
        title: 'عکس محصول نمونه',
        id: '1'
      }
    ]
  }
}
