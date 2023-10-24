import {
  addAllItemsToFilter,
  handleClickFilterOption,
  IFilterSelectProps,
  isAllItemSelected,
  isItemSelected
} from '@components/molecules/filter'
import clsx from 'clsx'
import { Typography } from '@components/atoms/typography'
import { Icon } from '@components/atoms/icons'
import { memo, useMemo, useState } from 'react'
import { Checkbox } from '@components/atoms/checkbox'
import classes from '../../styles.module.scss'

export const FilterSelect = memo(function FilterSelect(
  props: IFilterSelectProps
) {
  // TODO ADD OPEN ANIMATION

  const { index, content, options: allOptions, value, onFilterSelect } = props
  const { key, title, options } = content

  const [open, setOpen] = useState(false)

  return (
    <div className={clsx(classes.filter__filterItem)}>
      <div
        className={clsx(classes.filter__item, classes.filter__filterItemHead)}
        onClick={() => setOpen((p) => !p)}
      >
        <Typography variant={'caption1'} color={'primary-text'}>
          {title}
        </Typography>
        <Icon
          name={'arrow-down'}
          type={'linear'}
          color={'primary-text'}
          className={clsx(
            classes.filter__icon,
            open && classes.filter__iconOpen
          )}
        />
      </div>
      {open && (
        <div className={clsx(classes.filter__filterItemsContainer)}>
          {options?.length > 1 && (
            <div
              key={`$ALL_FILTER_${index}`}
              className={clsx(classes.filter__fiterItemContent)}
            >
              <Checkbox
                title={'همه'}
                value={isAllItemSelected(index, value, allOptions)}
                onChange={() =>
                  addAllItemsToFilter(index, allOptions, value, onFilterSelect)
                }
              />
            </div>
          )}
          {options?.map((option) => {
            const isSelected = isItemSelected(index, option?.key, value)

            return (
              <div
                key={option?.key}
                className={clsx(classes.filter__fiterItemContent)}
              >
                <Checkbox
                  title={option?.value}
                  value={isSelected}
                  onChange={() =>
                    handleClickFilterOption(
                      index,
                      option,
                      value,
                      !isSelected,
                      onFilterSelect
                    )
                  }
                />
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
})
