import { Page } from '@components/atoms/page'
import { ProductSlider } from '@components/organisms/productSlider'
import { CategorySection } from '@components/organisms/categorySection'
import { BannerSection } from '@components/organisms/bannerSection'
import { ProductSection } from '@components/organisms/productSection'
import { ILandingTemplateProps } from '@/templates/landing/types.ts'

export function Landing(props: ILandingTemplateProps) {
  const {
    bannerProducts,
    categories,
    banners,
    newProducts,
    amazingProducts,
    discountedProducts
  } = props

  return (
    <Page>
      <ProductSlider {...bannerProducts} />
      <CategorySection {...{ categories }} />
      <BannerSection
        banners={banners.length > 3 ? banners.slice(0, 3) : banners}
      />
      <ProductSection products={newProducts} type={'new'} />
      <ProductSection products={amazingProducts} type={'amazing'} />
      <ProductSection products={discountedProducts} type={'discounted'} />
      {banners.length > 5 && <BannerSection banners={banners.slice(4, 6)} />}
    </Page>
  )
}
