import { IProductSliderProps } from '@components/organisms/productSlider'
import { ICategorySectionProps } from '@components/organisms/categorySection'
import { IBannerSectionProps } from '@components/organisms/bannerSection'
import { IProductCardProps } from '@components/molecules/productCard'

export interface ILandingTemplateProps
  extends ICategorySectionProps,
    IBannerSectionProps {
  bannerProducts: IProductSliderProps
  newProducts: IProductCardProps[]
  amazingProducts: IProductCardProps[]
  discountedProducts: IProductCardProps[]
}
