import { ICategorySectionProps } from '@components/organisms/categorySection/types.ts'
import { ContainerBox } from '@components/atoms/containerBox'
import { CategoryBanner } from '@components/atoms/categoryBanner'
import clsx from 'clsx'
import classes from './styles.module.scss'

export function CategorySection({ categories }: ICategorySectionProps) {
  return (
    <ContainerBox name={'دسته بندی ها'} link={''}>
      <div className={clsx(classes.categoryContainer)}>
        {categories?.map((category) => (
          <CategoryBanner {...category} key={category.id} />
        ))}
      </div>
    </ContainerBox>
  )
}
