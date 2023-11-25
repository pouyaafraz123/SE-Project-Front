import { Typography } from '@components/atoms/typography'
import { ITablePerPageSelectorProps } from '@components/organisms/pageTable'
import { Icon } from '@components/atoms/icons'
import {
  getSelectBoxPosition,
  selectBoxFn
} from '@components/molecules/selectBox'
import { useRef } from 'react'
import clsx from 'clsx'
import { useTranslation } from 'react-i18next'
import classes from '../../styles.module.scss'
import { IOption } from '@/interfaces'

const perPageOptions: IOption[] = [
  { key: '5', value: '5' },
  { key: '10', value: '10' },
  { key: '15', value: '15' },
  { key: '20', value: '20' },
  { key: '30', value: '30' },
  { key: '50', value: '50' },
  { key: '100', value: '100' }
]

export function TablePerPageSelector({
  per_page,
  onResultPerPageChange
}: ITablePerPageSelectorProps) {
  const { t } = useTranslation('common')
  const ref = useRef<HTMLDivElement>(null)

  return (
    <div className={clsx(classes.pageTable__perPageSelector, 'gap-m2')}>
      <Typography>{t('display_page_count')}</Typography>
      <div
        className={clsx(classes.pageTable__perPageSelector)}
        ref={ref}
        onClick={() => {
          selectBoxFn.show({
            options: perPageOptions,
            refElementPosition: getSelectBoxPosition(ref?.current),
            onSelect: (value) => onResultPerPageChange(Number(value?.key))
          })
        }}
      >
        <Typography>{per_page}</Typography>
        <Icon name={'arrow-down'} />
      </div>
    </div>
  )
}
