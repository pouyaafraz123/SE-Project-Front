import { Ref, forwardRef } from 'react'
import { IOption, SelectBoxProps } from './types'
import classes from './styles.module.scss'
import { SearchInputWithState } from './searchInput'
import { Box } from '@/components/atoms/box'
import { MenuItem } from '@/components/atoms/menuItem'
import FlagImg from '@/components/atoms/flagImg/flagImg'
import { Typography } from '@/components/atoms/typography'

export const SelectBox = forwardRef(function SelectBox(
  props: SelectBoxProps,
  ref: Ref<HTMLDivElement>
) {
  const {
    hasSearch,
    onFilter,
    onSelect,
    options,
    renderItem,
    selectedItemIndex,
    width,
    x,
    y
  } = props

  function optionClickHandler(item: IOption, index: number) {
    onSelect?.(item, index)
  }

  return (
    <Box
      px='m3'
      py='2m1'
      radius='md'
      ref={ref}
      style={{
        left: x,
        top: y,
        width: `${width}px`,
        position: 'absolute',
        overflowY: 'auto'
      }}
    >
      {onFilter && hasSearch && (
        <SearchInputWithState
          onDebouncedValueChange={onFilter}
          className='mb-m3'
        />
      )}
      <div className={classes.content}>
        {options.length === 0 && (
          <Typography variant='caption1' center>
            موردی یافت نشد!
          </Typography>
        )}
        {options.map((item, index) => (
          <div key={index} onClick={() => optionClickHandler(item, index)}>
            {renderItem ? (
              renderItem(item)
            ) : (
              <MenuItem selected={selectedItemIndex === index}>
                {item.flag !== undefined && <FlagImg src={item.flag} />}
                <span>{item.value}</span>
              </MenuItem>
            )}
          </div>
        ))}
      </div>
    </Box>
  )
})
