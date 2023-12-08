import { Page } from '@components/atoms/page'
import { ProductSlider } from '@components/organisms/productSlider'
import { ILandingTemplateProps } from '@/templates/landing/types.ts'

export function Landing(props: ILandingTemplateProps) {
  const { bannerProducts } = props

  return (
    <Page>
      <ProductSlider {...bannerProducts} />
    </Page>
  )
}
