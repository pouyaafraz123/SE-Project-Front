import { Page } from '@components/atoms/page'
import { ProductSlider } from '@components/organisms/productSlider'
import { CategorySection } from '@components/organisms/categorySection'
import { ILandingTemplateProps } from '@/templates/landing/types.ts'

export function Landing(props: ILandingTemplateProps) {
  const { bannerProducts, categories } = props

  return (
    <Page>
      <ProductSlider {...bannerProducts} />
      <CategorySection {...{ categories }} />
    </Page>
  )
}
