import { ProductCard } from '@components/molecules/productCard/productCard.tsx'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Molecules/ProductCard',
  component: ProductCard
} satisfies Meta<typeof ProductCard>

export default meta

type Story = StoryObj<typeof meta>

export const Story: Story = {
  args: {
    title: 'محصول نمونه 1',
    img: `https://picsum.photos/seed/${Math.random()}/600/400`,
    rating: 4.3,
    price: 9999,
    id: '1',
    description:
      'طراحان سایت هنگام طراحی قالب سایت معمولا با این موضوع رو برو هستند که محتوای اصلی صفحات آماده نیست. در نتیجه طرح کلی دید درستی به کار فرما نمیدهد. اگر طراح بخواهد دنبال متن های مرتبط بگردد تمرکزش از روی کار اصلی برداشته میشود و اینکار زمان بر خواهد بود. همچنین طراح به دنبال این است که پس از ارایه کار نظر دیگران را در مورد طراحی جویا شود و نمی‌خواهد افراد روی متن های موجود تمرکز کنند.'
  }
}
