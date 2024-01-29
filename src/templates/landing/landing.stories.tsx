import { Meta, StoryObj } from '@storybook/react'
import { ISliderItem } from '@components/organisms/productSlider'
import { ICategoryBanner } from '@components/atoms/categoryBanner'
import { IBanner } from '@components/organisms/bannerSection'
import { IProductCardProps } from '@components/molecules/productCard'
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
    id: key?.toString()
  }
})

const categories: ICategoryBanner[] = [...Array(10).keys()]?.map((key) => {
  return {
    title: 'دسته بندی نمونه ' + (key + 1),
    bannerUrl: `https://picsum.photos/seed/${Math.random()}/600/400`,
    id: key
  }
})

const banners: IBanner[] = [...Array(10).keys()]?.map((key) => {
  return {
    img: `https://picsum.photos/seed/${Math.random()}/600/400`,
    link: ''
  }
})

const products: IProductCardProps[] = [...Array(10).keys()]?.map((key) => {
  return {
    title: 'محصول نمونه 1',
    img: `https://picsum.photos/seed/${Math.random()}/600/400`,
    rating: 4.3,
    price: 9999,
    id: '1',
    description:
      'طراحان سایت هنگام طراحی قالب سایت معمولا با این موضوع رو برو هستند که محتوای اصلی صفحات آماده نیست. در نتیجه طرح کلی دید درستی به کار فرما نمیدهد. اگر طراح بخواهد دنبال متن های مرتبط بگردد تمرکزش از روی کار اصلی برداشته میشود و اینکار زمان بر خواهد بود. همچنین طراح به دنبال این است که پس از ارایه کار نظر دیگران را در مورد طراحی جویا شود و نمی‌خواهد افراد روی متن های موجود تمرکز کنند.'
  }
})

export const LandingStory: Story = {
  args: {
    bannerProducts: { items: bannerProducts },
    categories,
    banners,
    newProducts: products,
    amazingProducts: products,
    discountedProducts: products
  }
}
