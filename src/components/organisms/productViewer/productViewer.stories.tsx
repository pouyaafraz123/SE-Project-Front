import { Meta, StoryObj } from '@storybook/react'
import { ProductViewer } from '@components/organisms/productViewer/productViewer.tsx'

const meta = {
  title: 'Organisms/ProductViewer',
  component: ProductViewer,
  parameters: {
    layout: 'fullscreen'
  }
} satisfies Meta<typeof ProductViewer>

export default meta

type Story = StoryObj<typeof meta>

export const ProductViewerStory: Story = {
  args: {
    id: '1',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود',
    rating: 2.3,
    price: 3434423,
    images: [...Array(10).keys()]?.map(
      (key) => `https://picsum.photos/seed/${Math.random()}/600/400`
    ),
    quantity: 3,
    detail: {
      رنگ: 'سبز'
    },
    title: 'گوشی موبایل هوآوی',
    cover: 'https://picsum.photos/seed/${Math.random()}/600/400'
  }
}
