import { ICategoryTableTemplateProps } from '@/templates/category/types.ts'
import { useTranslation } from 'react-i18next'
import { PageTable } from '@components/organisms/pageTable'
import { CategoryBanner } from '@components/atoms/categoryBanner'

export function CategoryTableTemplate({
  data,
  tableParamProps,
  isLoading,
  isFetching,
  total
}: ICategoryTableTemplateProps) {
  const { t } = useTranslation('form')

  if (isLoading || !data) return null

  return (
    <PageTable
      noSearch
      noDownload
      noPrint
      title={t('categories')}
      type={'grid'}
      total={total}
      isFetching={isFetching}
      {...tableParamProps}
    >
      {data?.map((category) => (
        <CategoryBanner
          key={category?.uuid}
          id={category?.uuid}
          title={category?.name}
          bannerUrl={
            'https://files.virgool.io/upload/users/3239/posts/silsu6rfdea9/yu8fghqbaecj.jpeg'
          }
        />
      ))}
    </PageTable>
  )
}
