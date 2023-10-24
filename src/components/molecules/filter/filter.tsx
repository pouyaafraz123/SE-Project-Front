import { Icon } from '@components/atoms/icons'
import clsx from 'clsx'
import { Input } from '@components/formControls'
import { Typography } from '@components/atoms/typography'
import { IFilterProps } from '@components/molecules/filter/types.ts'
import { FilterSelect } from '@components/molecules/filter/components/filterSelect'
import { useEffect, useMemo, useState } from 'react'
import {
  clearAllFilters,
  normalizeFilterValues
} from '@components/molecules/filter/helper.ts'
import classes from './styles.module.scss'

export function Filter(props: IFilterProps) {
  // TODO ICON CLICK BUG
  const {
    index,
    options,
    value: rawValue,
    onFilterSelect,
    containerClassname,
    contentClassname,
    setToUrl
  } = props

  const value = normalizeFilterValues(options, rawValue)

  const [open, setOpen] = useState(false)

  useEffect(() => {
    const func = () => setOpen(false)
    document.addEventListener('click', func)

    return () => {
      document.removeEventListener('click', func)
    }
  }, [])

  return (
    <div
      className={clsx(classes.filter__container, containerClassname)}
      onClick={(e) => e.stopPropagation()}
    >
      <Input
        readOnly
        placeholder={'فیلتر'}
        icon={<Icon name={'arrow-down'} color={'primary-main'} />}
        className={clsx(classes.filter)}
        onClick={() => setOpen(true)}
      />
      <div
        className={clsx(
          classes.filter__inside,
          contentClassname,
          open && classes.filter__insideOpen
        )}
      >
        <div className={clsx(classes.filter__item, classes.filter__head)}>
          <Typography fontSize={'base'} fontWeight={'semi-bold'}>
            فیلتر
          </Typography>
          <Typography
            variant={'caption1'}
            color={'primary-main'}
            className={classes.filter__pointer}
            htmlAttribute={{ onClick: () => clearAllFilters(onFilterSelect) }}
          >
            پاک کردن همه
          </Typography>
        </div>
        <div className={clsx(classes.filter__allItems)}>
          {options?.map((option, index) => (
            <FilterSelect
              index={index}
              content={option}
              value={value}
              options={options}
              onFilterSelect={onFilterSelect}
              key={option?.key}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
