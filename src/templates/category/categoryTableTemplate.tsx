import { useTranslation } from 'react-i18next'
import { PageTable } from '@components/organisms/pageTable'
import { CategoryBanner } from '@components/atoms/categoryBanner'
import { useUserStore } from '@stores'
import { UserTypes } from '@constants'
import { Button } from '@components/atoms/button'
import { useNavigate } from 'react-router-dom'
import { ICategoryTableTemplateProps } from '@/templates/category/types.ts'
import { path } from '@/routes'

export function CategoryTableTemplate({
  data,
  tableParamProps,
  isLoading,
  isFetching,
  total
}: ICategoryTableTemplateProps) {
  const { t } = useTranslation('form')

  const role = useUserStore((state) => state.role)

  const navigate = useNavigate()

  if (isLoading || !data) return null

  const actions = [UserTypes.MANAGER, UserTypes.STAFF]?.includes(
    role || UserTypes.CUSTOMER
  )
    ? [
        <Button
          key={'1'}
          mode={'main'}
          className={'w-100'}
          onClick={() => navigate(path.common.categoryForm.link())}
        >
          اضافه کردن دسته بندی
        </Button>
      ]
    : undefined

  return (
    <PageTable
      actions={actions}
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
