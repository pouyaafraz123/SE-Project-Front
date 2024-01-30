import { useTranslation } from 'react-i18next'
import { PageTable } from '@components/organisms/pageTable'
import { useUserStore } from '@stores'
import { UserTypes } from '@constants'
import { Button } from '@components/atoms/button'
import { useNavigate } from 'react-router-dom'
import { Typography } from '@components/atoms/typography'
import clsx from 'clsx'
import classes from './styles.module.scss'
import { IBrandTableTemplateProps } from '@/templates/brands/types.ts'
import { path } from '@/routes'
import { IOption } from '@/interfaces'

export function BrandTableTemplate({
  data,
  tableParamProps,
  isLoading,
  isFetching,
  total
}: IBrandTableTemplateProps) {
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
          onClick={() => navigate(path.common.brandForm.link())}
        >
          اضافه کردن برند
        </Button>
      ]
    : undefined

  return (
    <PageTable
      actions={actions}
      noSearch
      noDownload
      noPrint
      title={t('brands')}
      type={'grid'}
      total={total}
      isFetching={isFetching}
      {...tableParamProps}
    >
      {data?.map((brand) => (
        <div
          key={brand?.uuid}
          className={clsx(classes.brand)}
          onClick={() => {
            const search = new URLSearchParams()
            const b: IOption = { key: brand?.uuid, value: brand?.name }
            search.set('brand', JSON.stringify(b))
            navigate(
              {
                pathname: path.common.productSearch.link(),
                search: search?.toString()
              },
              { replace: true }
            )
          }}
        >
          <Typography variant={'h6'}>{brand?.name}</Typography>
          <img
            src={brand?.logoFile?.url}
            alt={brand?.name}
            className={clsx(classes.brand__img)}
          />
        </div>
      ))}
    </PageTable>
  )
}
