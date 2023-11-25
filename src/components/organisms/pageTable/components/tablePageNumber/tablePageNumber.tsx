import { Typography } from '@components/atoms/typography'
import { ITablePageNumberProps } from '@components/organisms/pageTable'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

export function TablePageNumber({
  page,
  per_page,
  total
}: ITablePageNumberProps) {
  const { t } = useTranslation('common')

  const count = useMemo(() => {
    return getCount(page, per_page, total)
  }, [page, per_page, total])

  return (
    <div>
      <Typography>
        {t('table_page_number', { number_text: count, total })}
      </Typography>
    </div>
  )
}

const getCount = (page: number, perPage: number, total: number) => {
  const start = (page - 1) * perPage + 1
  const end = Math.min(page * perPage, total)

  return `${start} - ${end}`
}
