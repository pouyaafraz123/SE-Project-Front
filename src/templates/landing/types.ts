import { IProductSliderProps } from '@components/organisms/productSlider'
import { ICategorySectionProps } from '@components/organisms/categorySection'

export interface ILandingTemplateProps extends ICategorySectionProps {
  bannerProducts: IProductSliderProps
}
