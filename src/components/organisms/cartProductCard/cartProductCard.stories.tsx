import { Meta, StoryObj } from '@storybook/react'
import { CartProductCard } from '.'

const meta = {
  title: 'Organisms/CartProductCard',
  component: CartProductCard
} satisfies Meta<typeof CartProductCard>

export default meta

type Story = StoryObj<typeof meta>

export const CartProductCardStory: Story = {
  args: {
    title: 'تلویزیون ال ای دی صنام',
    id: 1,
    price: 400000000000,
    quantity: 13,
    img: `https://picsum.photos/seed/${Math.random()}/600/400`,
    discount: 20
  }
}
